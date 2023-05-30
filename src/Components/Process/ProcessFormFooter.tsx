const ProcessFormFooter = () => {
  return (
    <div className="form-footer">
      <FormControl sx={{ m: 0, minWidth: 160 }} size="small">
        <InputLabel id="tos-library-label">TOS Library</InputLabel>
        <Select
          labelId="tos-library-label"
          id="tos-library-select"
          value={selectedLibrary}
          label="Select TOS"
          onChange={handleLibraryChange}
        >
          {tosLibrary.map((tos) => (
            <MenuItem key={tos.service} value={tos.tos}>
              {tos.service}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div className="buttons-parent">
        <Button
          disabled={!(tosInput && getConcernCount())}
          onClick={sendTOS}
          color="primary"
          variant="contained"
          disableElevation
          startIcon={<CheckRoundedIcon />}
        >
          Process
        </Button>
        <input
          disabled={!getConcernCount()}
          accept="application/pdf"
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
          onChange={(e) => {
            if (e.target.files) {
              processPDF(e.target.files[0]);
            }
          }}
        />
        <label htmlFor="contained-button-file">
          <Button
            disabled={!getConcernCount()}
            component="span"
            color="primary"
            variant="outlined"
            startIcon={<UploadFileIcon />}
          >
            Upload
          </Button>
        </label>
      </div>
    </div>
  );
};

export default ProcessFormFooter;

ComponentCss = `
 p {
  color: prop ? black : blue
 }

`;
