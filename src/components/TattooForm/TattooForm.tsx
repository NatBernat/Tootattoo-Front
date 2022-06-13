import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { AppDispatch } from "../../redux/store/store";
import {
  createTattooThunk,
  updateTattooThunk,
} from "../../redux/thunks/tattoosThunks/tattoosThunks";
import { ITattoo, ITattooCreate } from "../../types/types";
import TattooFormStyled from "./TattooFormStyled";

type tattooProp = {
  tattoo: ITattoo | null;
};

const TattooForm = ({ tattoo }: tattooProp): JSX.Element => {
  const dispatch: AppDispatch = useAppDispatch();

  const username: string = useAppSelector((state) => state.user.username);
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const formInitialState: ITattooCreate = {
    image: tattoo ? tattoo.image : "",
    title: tattoo ? tattoo.title : "",
    creator: username,
    creationDate: tattoo ? tattoo.creationDate : date,
  };

  const [formData, setFormData] = useState<ITattooCreate>(formInitialState);

  const changeFormData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files![0] || ""
          : event.target.value,
    });
  };

  const [buttonDisable, setButtonDisable] = useState(true);
  useEffect(() => {
    if (formData.title !== "") {
      setButtonDisable(false);
    }
  }, [formData]);

  const resetForm = () => {
    setFormData(formInitialState);
  };

  const navigate = useNavigate();

  const updateTattoo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData: FormData | any = new FormData();
    dispatchedData.append("image", formData.image);
    dispatchedData.append("title", formData.title);
    dispatchedData.append("creator", formData.creator);
    dispatchedData.append("creationDate", formData.creationDate);

    resetForm();
    const id = tattoo?._id;
    dispatch(updateTattooThunk(dispatchedData, id as string));
    navigate("/my-tattoos");
  };

  const submitTattoo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const dispatchedData: FormData | any = new FormData();
    dispatchedData.append("image", formData.image);
    dispatchedData.append("title", formData.title);
    dispatchedData.append("creator", formData.creator);
    dispatchedData.append("creationDate", formData.creationDate);
    resetForm();

    dispatch(createTattooThunk(dispatchedData));
    navigate("/my-tattoos");
  };

  return (
    <TattooFormStyled>
      <form
        noValidate
        autoComplete="off"
        onSubmit={tattoo ? updateTattoo : submitTattoo}
      >
        <label htmlFor="image">Image (max. 5mb)</label>
        <input
          id="image"
          type="file"
          accept=".jpg,.jpeg,.png"
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
    </TattooFormStyled>
  );
};

export default TattooForm;
