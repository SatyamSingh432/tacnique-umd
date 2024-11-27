import "./Error.css";

const ErrorMessage = ({ message }) => (
  <div className="error">
    <p>
      Something went wrong! <span>{message}</span>
    </p>
    <p
      onClick={() => {
        window.location.reload();
      }}
      className="reload"
    >
      Please reload.
    </p>
  </div>
);
export default ErrorMessage;
