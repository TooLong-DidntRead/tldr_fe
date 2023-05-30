import ProcessFormFooter from "./ProcessFormFooter";
import ProcessFormHeader from "./ProcessFormHeader";

const ProcessForm = () => {
  // state form
  return (
    <form className="form-card">
      <ProcessFormHeader />
      {/* <TextField
        value={tosInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          handleTOSChange(event.target.value);
        }}
        id="tos"
        multiline
        rows={7}
      />
      <FormControl sx={{ m: 0 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Select Area(s) of Concern</FormLabel>
        <FormGroup row>{getConcernAreaChecks()}</FormGroup>
      </FormControl> */}
      // <ProcessFormInput />
      // <ProcessFormControls />
      <ProcessFormFooter />
    </form>
  );
};

export default ProcessForm;
