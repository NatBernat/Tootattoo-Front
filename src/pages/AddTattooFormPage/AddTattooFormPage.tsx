import TattooForm from "../../components/TattooForm/TattooForm";
import AddTattooFormPageStyled from "./AddTattooFormPageStyled";

const AddTattooFormPage = (): JSX.Element => {
  return (
    <AddTattooFormPageStyled className="page">
      <h2 className="page-title">Add a tattoo:</h2>
      <TattooForm tattoo={null} />
    </AddTattooFormPageStyled>
  );
};

export default AddTattooFormPage;
