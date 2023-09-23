import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2>Opps!!! 404</h2>
      <Link to="/">Go Back To home</Link>
    </div>
  );
};

export default ErrorPage;
