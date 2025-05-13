/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

// Button + layout styles
const useStyles = makeStyles(() => ({
  container: {
    textAlign: "center",
    padding: "20px",
  },
  studentCard: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    margin: "20px auto",
    maxWidth: "600px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    border: "2px solid black",
    cursor: "pointer",
    textDecoration: "none",
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  removeButton: {
    backgroundColor: "#ffc107",
    color: "black",
  },
}));


const AllCampusesView = (props) => {
  const { allCampuses, deleteCampus } = props;
  const classes = useStyles();
  
  // If there is no campus, display a message.
  if (!props.allCampuses.length) {
      return (
        <div>
          <h1>All Campuses</h1>
          <p>
            Sorry, there are no campuses here, either none have been added or all
            have been deleted. You can add a new campus below!
          </p>
          <br />
          <Link to={`/newcampus`}>
            <button className={classes.button}>Add New Campus</button>
          </Link>
          <br />
          <br />
        </div>
    );
  }

  // If there is at least one campus, render All Campuses view 
  return (
    <div>
      <h1>All Campuses</h1>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h2>{campus.name}</h2>
          </Link>
          <h4>campus id: {campus.id}</h4>
          <p>{campus.address}</p>
          <p>{campus.description}</p>
           {/* Edit Campus button */}
          <Link to={`/editcampus/${campus.id}`}>
            <button className={classes.button}>Edit Campus</button>
          </Link>
          {/*Delete button */}
          <button
          className={classes.button}
            onClick={() => {
              if (window.confirm(`Are you sure you want to delete ${campus.name}?`)) {
                deleteCampus(campus.id);
              }
            }}
          >
            Delete Campus
          </button>
          <hr/>
        </div>
      ))}
      <br/>
      <Link to={`/newcampus`}>
        <button className={classes.button}> Add New Campus</button>
      </Link>
      <br/><br/>
    </div>
  );
};

// Validate data type of the props passed to component.
AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  deleteCampus: PropTypes.func.isRequired,
};

export default AllCampusesView;