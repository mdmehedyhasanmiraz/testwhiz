import { useRouteError } from "react-router-dom"
import Header from "../header/Header"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <div>
        <Header />
      </div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>We are working on it!</i>
      </p>
    </div>
  );
}