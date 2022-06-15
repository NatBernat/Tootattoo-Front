import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <img
        src={process.env.REACT_APP_FRONT_URL + "images/imageLogo.svg"}
        alt="Loader"
      />
    </LoadingStyled>
  );
};

export default Loading;
