import axios from "axios";
import config from "../config";
import { Token } from "./Token";

const MAX_RETRY = 3;

const client = axios.create();

client.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export class HttpClient {
  constructor() {
    this.token = new Token();
    this.baseUrl = config.baseUrl || window.location.origin;
  }

  getAxiosHeaders() {
    const headers = {};

    const accessToken = this.token.getAccessToken();
    if (accessToken) {
      headers.authorization = `Bearer ${accessToken}`;
    }

    return headers;
  }

  async refreshAccessToken() {
    try {
      const refreshToken = this.token.getRefreshToken();
      if (!refreshToken) throw new Error("No refresh token available");

      const response = await axios.post(`${this.baseUrl}/auth/refresh`, {
        refresh_token: refreshToken,
      });

      const newAccessToken = response.data.access_token;

      this.token.setAccessToken(newAccessToken);
      return newAccessToken;
    } catch (error) {
      console.error("Error refreshing token", error);
      this.token.reset();
      throw error;
    }
  }

  async executeQuery(method, url, query, body, retryCount = 0) {
    if (retryCount > MAX_RETRY) {
      this.token.reset();
      throw new Error("MAX_RETRY_EXCEEDED");
    }

    try {
      const response = await axios({
        baseURL: this.baseUrl,
        url,
        method,
        params: query,
        data: body,
        headers: this.getAxiosHeaders(),
      });
      return response;
    } catch (error) {
      if (error.response && error.response.status === 401) {
        try {
          const newAccessToken = await this.refreshAccessToken();
          this.setAxiosHeaderAuthorization(newAccessToken);
          return this.executeQuery(method, url, query, body, retryCount + 1);
        } catch (e) {
          throw e;
        }
      }
      throw error;
    }
  }

  setAxiosHeaderAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  async get(url, query) {
    return this.executeQuery("get", url, query);
  }

  async post(url, body) {
    return this.executeQuery("post", url, {}, body);
  }

  async patch(url, body) {
    return this.executeQuery("patch", url, {}, body);
  }

  async delete(url) {
    return this.executeQuery("delete", url);
  }
}
