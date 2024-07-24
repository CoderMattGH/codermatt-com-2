import "./index.css";

export function ErrorPage() {
  return (
    <div className="error-page-container">
      <img
        alt="Error!"
        className="error-img"
        src="/images/icons/codermatt.svg"
      />
      <p className="error-msg">Page not found!</p>
    </div>
  );
}
