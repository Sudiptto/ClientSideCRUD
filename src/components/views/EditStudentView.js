import { makeStyles } from '@material-ui/core/styles';

// make the styling for the form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: "500px",
    backgroundColor: "#f0f0f5",
    borderRadius: "8px",
    margin: "40px auto",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  formTitle: {
    marginBottom: "15px",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#11153e",
  },
  inputField: {
    marginBottom: "15px",
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
  },
  submitButton: {
    marginTop: "20px",
    textTransform: "none",
  },
}));

const EditStudentView = (props) => {
    // create the styling for the form
  const { handleChange, handleSubmit, student } = props;
  const classes = useStyles();


// build the form (similar to the other forms)
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formTitle}>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          className={classes.inputField}
          type="text"
          name="firstname"
          placeholder="First Name"
          value={student.firstname}
          onChange={handleChange}
          required
        />
        <input
          className={classes.inputField}
          type="text"
          name="lastname"
          placeholder="Last Name"
          value={student.lastname}
          onChange={handleChange}
          required
        />
        <input
          className={classes.inputField}
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
          required
        />
        <input
          className={classes.inputField}
          type="number"
          step="0.1"
          name="gpa"
          placeholder="GPA (0.0 - 4.0)"
          value={student.gpa}
          onChange={handleChange}
        />
        <input
          className={classes.inputField}
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          value={student.imageUrl}
          onChange={handleChange}
        />
        <input
          className={classes.inputField}
          type="number"
          name="campusId"
          placeholder="Campus ID"
          value={student.campusId || ""}
          onChange={handleChange}
        />
        <button
          type="submit"
          className={classes.submitButton}
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer"
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditStudentView;