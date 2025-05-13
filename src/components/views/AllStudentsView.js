/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
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

const AllStudentsView = (props) => {
  const {students, deleteStudent, removeStudentFromCampus, enrollStudentToCampus} = props;
  const classes = useStyles();

  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}  className={classes.button}>
        <button 
        variant="contained"
        color="primary"
        className={classes.button}>Add New Student</button>
      </Link>
    </div>
    );
  }
  
  // If there is at least one student, render All Students view 
  return (
    <div>
      <h1>All Students (Click on Profile to Learn More About Each of Them)</h1>

      {students.map((student) => {
          let name = student.firstname + " " + student.lastname;
            return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
              <h2>{name}</h2>
              </Link>
              <p>College - {student.campus ? student.campus.name : "Not Assigned"}</p>
              {/*Delete student */}
              <button 
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                deleteStudent(student.id);
                window.location.reload(); // Refresh the page
                }}>
                
                Delete
              
              </button>
              {/*Remove student from Campus (doesn't remove from DB) */}
              <button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => {
                if (
                window.confirm(
                  `Are you sure you want to remove ${name} from their campus?`
                )
                ) {
                removeStudentFromCampus(student.id);
                window.location.reload(); // Refresh the page
                }
              }}
              >
              Remove from Campus
              </button>

              {/* Enroll student to a campus */}
              <button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={() => {
                  const campusId = prompt(
                    `Enter the Campus ID to enroll ${name} to a campus:`
                  );
                  if (campusId) {
                    enrollStudentToCampus(student.id, campusId);
                    window.location.reload(); // Refresh the page
                  }
                }}
              >
                Enroll Student to Campus
              </button>
              <hr/>
            </div>
            );
        }
      )}
      <br/>
      <Link to={`/newstudent`}>
        <button className={classes.button}>Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;