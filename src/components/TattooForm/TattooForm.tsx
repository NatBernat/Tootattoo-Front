import { useAppSelector } from "../../redux/hooks/hooks";

const TattooForm = (): JSX.Element => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <>
      <form noValidate autoComplete="off">
        <label htmlFor="image">Image</label>
        <button id="image-button">Open</button>
        <input id="file-input" type="file" name="image" />
        <label htmlFor="title">Title</label>
        <input placeholder="tattoo title" id="title" />
        <label htmlFor="creator">usename creator</label>
        <input
          placeholder="tattoo owner"
          id="creator"
          value={username}
          disabled
        />
        <button type="submit">Submit tattoo</button>
      </form>
    </>
  );
};

export default TattooForm;
