import LogInFormStyled from "../LogInForm/LogInFormStyled";

const TattooForm = (): JSX.Element => {
  return (
    <LogInFormStyled>
      <form noValidate autoComplete="off">
        <label htmlFor="image">Image</label>
        <input
          id="image-input"
          type="file"
          name="image"
          accept=".jpg,.jpeg,.png"
        />
        <label htmlFor="title">Title</label>
        <input placeholder="tattoo title" id="title" />
        <label htmlFor="title">Tags</label>
        <input placeholder="tags" id="tags" />
        <button type="submit">Submit tattoo</button>
      </form>
    </LogInFormStyled>
  );
};

export default TattooForm;
