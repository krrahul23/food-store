import React from "react";
import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      <p>Please try again later.</p>
    </div>
  );
}

export default ErrorPage;
