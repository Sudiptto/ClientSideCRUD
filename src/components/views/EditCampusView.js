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

const EditCampusView = (props) => {
  const { handleChange, handleSubmit, campus } = props;
  const classes = useStyles();

  // Render the edit campus form
  return (
    <div className={classes.formContainer}>
      <h2 className={classes.formTitle}>Edit Campus</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className={classes.inputField}
          type="text"
          name="name"
          placeholder="Campus Name"
          value={campus.name}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          className={classes.inputField}
          type="text"
          name="address"
          placeholder="Campus Address"
          value={campus.address}
          onChange={(e) => handleChange(e)}
          required
        />
        <textarea
          className={classes.inputField}
          name="description"
          placeholder="Campus Description"
          rows="4"
          value={campus.description}
          onChange={(e) => handleChange(e)}
        />
        <input
          className={classes.inputField}
          type="text"
          name="imageUrl"
          placeholder="Image URL (optional)"
          value={campus.imageUrl}
          onChange={(e) => handleChange(e)}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default EditCampusView;