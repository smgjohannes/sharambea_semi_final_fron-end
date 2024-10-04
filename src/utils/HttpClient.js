import axios from 'axios';
import config from '../config';

const MAX_RETRY = 3;

export class HttpClient {
  constructor(token) {
    this.token = token;
    this.baseURL = config.baseUrl;
  }

  getAxiosHeaders() {
    const headers = {};
    if (this.token.getAccessToken()) {
      headers.authorization = `Bearer ${this.token.getAccessToken()}`;
    }
    return headers;
  }

  async executeQuery(method, url, query, body, retryCount = 0) {
    if (retryCount > MAX_RETRY) {
      this.token.reset();
      throw new Error('MAX_RETRY_EXCEEDED');
    }

    try {
      const response = await axios({
        baseURL: this.baseURL,
        url,
        method,
        params: query,
        data: body,
        headers: this.getAxiosHeaders(),
      });
      return response;
    } catch (err) {
      throw err; // error must thrown to be catched by createAsyncThunk's rejectWithValue
    }
  }

  async get(url, query) {
    return this.executeQuery('get', url, query);
  }

  async post(url, body) {
    return this.executeQuery('post', url, {}, body);
  }

  async patch(url, body) {
    return this.executeQuery('patch', url, {}, body);
  }

  async put(url, body) {
    return this.executeQuery('put', url, {}, body);
  }

  async delete(url, body) {
    return this.executeQuery('delete', url, {}, body);
  }
}
