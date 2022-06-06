import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="page">
      <h2>Page not found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <img src="./images/imageLogo.svg" alt="tootattoo logo" />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
