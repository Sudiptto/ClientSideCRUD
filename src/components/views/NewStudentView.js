import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles(() => ({
  formContainer: {
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
    padding: '20px',
  },
  formTitle: {
    marginBottom: '15px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px',
    color: '#11153e',
  },
  inputField: {
    marginBottom: '15px',
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
}));

const NewStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  // Render a New Student view with an input form
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formTitle}>Register a New Student</h2>
      {/*Form to add new students below */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={classes.inputField}
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className={classes.inputField}
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className={classes.inputField}
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className={classes.inputField}
          type="number"
          step="0.1"
          name="gpa"
          placeholder="GPA (0.0 - 4.0)"
          onChange={(e) => handleChange(e)}
        />
        <input
          className={classes.inputField}
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          onChange={(e) => handleChange(e)}
        />
        <input
          className={classes.inputField}
          type="number"
          name="campusId"
          placeholder="Campus ID"
          onChange={(e) => handleChange(e)}
          required // Make campusId mandatory
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default NewStudentView;