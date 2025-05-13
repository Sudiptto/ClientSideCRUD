/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link, useHistory } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const {campus} = props;
  const history = useHistory();

  // Function to navigate to the Add Student page with the campus ID
  const handleAddStudent = () => {
    history.push({
      pathname: "/newstudent",
      // Pass the campus ID as state
      state: { campusId: campus.id }, 
    });
  };
  
  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <p>Enrolled students below:</p>
      {campus.students.length > 0 ? (
        campus.students.map(student => {
          let name = student.firstname + " " + student.lastname;
          return (
            <div key={student.id}>
              <Link to={`/student/${student.id}`}>
                <h2>{name}</h2>
              </Link>
            </div>
          );
        })
      ) : (
        <p>No students are currently enrolled at this campus.</p>
      )}
      {/* Add a button to add a new student to this campus */}
        <button onClick={handleAddStudent}>Add Student</button>
    </div>
  );
};

export default CampusView;