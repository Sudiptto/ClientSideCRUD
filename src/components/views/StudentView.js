/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import { Link } from "react-router-dom";

const StudentView = (props) => {
  const { student } = props;

  // Helper to check if imageUrl is valid (basic check)
  const isValidImage = (url) => {
    return url && typeof url === "string" && url.trim() !== "";
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {/* Only show image if valid and present */}
      {isValidImage(student.imageUrl) && (
        <img
          src={student.imageUrl}
          alt={student.firstname + " " + student.lastname}
          style={{ maxWidth: "200px", borderRadius: "8px", margin: "20px 0" }}
          onError={e => { e.target.style.display = "none"; }}
        />
      )}
      <p><strong>Email:</strong> {student.email}</p>
      {student.gpa !== null && student.gpa !== undefined && student.gpa !== "" && (
        <p><strong>GPA:</strong> {student.gpa}</p>
      )}
      {student.campus && student.campus.id ? (
        <div>
          {/*Link back to the students campus */}
          <Link to={`/campus/${student.campus.id}`}>
            <h3 style={{ color: "#007bff", textDecoration: "underline", display: "inline-block" }}>
              {student.campus.name}
            </h3>
          </Link>
        </div>
      ) : (
        <h3>Not Assigned to a Campus</h3>
      )}

      {/*Edit student */}
      <Link to={`/editstudent/${student.id}`}>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#ffc107",
            color: "black",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Edit Student
        </button>
      </Link>

      {/*Link back to the originals tudent page */}
      <Link to="/students">
        <button
          style={{
            marginTop: "30px",
            padding: "10px 20px",
            fontSize: "16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          See All Students
        </button>
      </Link>
    </div>
  );
};

export default StudentView;