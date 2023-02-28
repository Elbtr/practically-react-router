import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error acurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = error.data.message;
  }
  if (error.status === 404) {
    message = "cold not find resource or page ";
    title = "Not Found!";
  }
  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}

export default ErrorPage;
