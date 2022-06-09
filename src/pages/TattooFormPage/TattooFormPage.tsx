import TattooForm from "../../components/TattooForm/TattooForm";
import TattooFormPageStyled from "./TattooFormPageStyled";

const TattooFormPage = (): JSX.Element => {
  return (
    <TattooFormPageStyled className="page">
      <h2 className="page-title">Add a tattoo:</h2>
      <TattooForm />
    </TattooFormPageStyled>
  );
};

export default TattooFormPage;
