/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students (if any).
================================================== */
import { Link } from "react-router-dom";

// Take in props data to construct the component
const CampusView = (props) => {
  const { campus } = props;

  // Helper to check if imageUrl is valid (basic check)
  const isValidImage = (url) => {
    return url && typeof url === "string" && url.trim() !== "";
  };

  // Render a single Campus view with list of its students
  return (
    <div>
      <h1>{campus.name}</h1>

      {/* Check if imageUrl is valid before rendering the image */}
      {isValidImage(campus.imageUrl) && (
        <img
          src={campus.imageUrl}
          alt={campus.name}
          style={{ maxWidth: "300px", borderRadius: "10px", margin: "20px 0" }}
          onError={e => { e.target.style.display = "none"; }}
        />
      )}
      {/*Display other pieces of information */}
      <p>{campus.address}</p>
      <p>{campus.description}</p>
      <p>Enrolled students below:</p>
      {/* Check if there are students enrolled in this campus */}
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
      <Link to={{
        pathname: "/newstudent",
        state: { campusId: campus.id }
      }}>
        <button 
        style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Add Student</button>
      </Link>
      <br />
      <Link to="/campuses">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Back to All Campuses
        </button>
      </Link>
    </div>
  );
};

export default CampusView;