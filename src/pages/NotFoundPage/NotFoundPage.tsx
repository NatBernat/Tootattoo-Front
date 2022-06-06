import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled className="page not-found-page">
      <h2>Page not found</h2>
      <img src="./images/imageLogo.svg" alt="tootattoo logo" />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
