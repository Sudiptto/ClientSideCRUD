/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const {students, deleteStudent, removeStudentFromCampus, enrollStudentToCampus} = props;
  // If there is no student, display a message
  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
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
              <button onClick={() => {
              deleteStudent(student.id);
              window.location.reload(); // Refresh the page
              }}>Delete</button>
              {/*Remove student from Campus (doesn't remove from DB) */}
              <button
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
        <button>Add New Student</button>
      </Link>
      <br/><br/>
    </div>
  );
};


export default AllStudentsView;