export const Alert = ({ message, type, onClose }) => {
  const alertClass = type === 'success' ? 'alert-success' : 'alert-danger';

  return (
    <div
      className={`alert ${alertClass} alert-dismissible fade show`}
      role='alert'>
      {message}
      <button type='button' className='btn-close' onClick={onClose}></button>
    </div>
  );
};
