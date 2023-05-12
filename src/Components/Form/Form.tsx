import "./Form.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

const Form = () => {
  return (
    <div className="form-card">
      <h3 className="form-heading">
        Paste TOS, Upload .pdf, or choose from a list of popular services
      </h3>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          bottom: "10px",
          transform: "translate(-50%,-50%)",
        }}
      >
        Process TOS
      </Button>
    </div>
  );
};

export default Form;
