import { ChangeEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { AppDispatch } from "../../redux/store/store";
import { createTattooThunk } from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattooCreate } from "../../types/types";
import LogInFormStyled from "../LogInForm/LogInFormStyled";

const TattooForm = (): JSX.Element => {
  const username: string = useAppSelector((state) => state.user.username);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const formInitialState: ITattooCreate = {
    image: "",
    title: "",
    creator: username,
    creationDate: date,
  };

  const [formData, setFormData] = useState<ITattooCreate>(formInitialState);

  const changeFormData = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    if (formData.image !== "" && formData.title !== "") {
      setButtonDisable(false);
    } else {
      setButtonDisable(true);
    }
  }, [formData]);

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const dispatch: AppDispatch = useAppDispatch();
  const submitTattoo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData = { ...formData };

    resetForm();

    dispatch(createTattooThunk(dispatchedData));
  };

  return (
    <LogInFormStyled>
      <form noValidate autoComplete="off" onSubmit={submitTattoo}>
        <label htmlFor="image">Image</label>
        <input
          placeholder="tattoo image url"
          id="image"
          value={formData.image}
          onChange={changeFormData}
        />
        <label htmlFor="title">Title</label>
        <input
          placeholder="tattoo title"
          id="title"
          value={formData.title}
          onChange={changeFormData}
        />
        <label htmlFor="title">Tags</label>
        <input placeholder="future feature" id="tags" disabled />
        <button type="submit" disabled={buttonDisable}>
          Submit tattoo
        </button>
      </form>
    </LogInFormStyled>
  );
};

export default TattooForm;
