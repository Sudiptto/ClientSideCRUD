/*==================================================
EditStudentContainer.js

The Container component is responsible for stateful logic and data fetching, and
passes data (if any) as props to the corresponding View component.
If needed, it also defines the component's "connect" function.
================================================== */

import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';

// create a class component to handle the edit student form
class EditStudentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      gpa: "",
      imageUrl: "",
      campusId: "",
      redirect: false,
      redirectId: null,
    };
  }


  // Fetch the student data from the back-end database when the component mounts
  async componentDidMount() {
    const studentId = this.props.match.params.id;
    await this.props.fetchStudent(studentId);
    const { firstname, lastname, email, gpa, imageUrl, campus } = this.props.student;
    // set state 
    this.setState({
      firstname,
      lastname,
      email,
      gpa: gpa || "",
      imageUrl: imageUrl || "",
      campusId: campus ? campus.id : "",
    });
  } 

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // handleSubmit function to handle the form submission
  handleSubmit = async (event) => {
    event.preventDefault();
    const student = {
      id: this.props.student.id,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      gpa: this.state.gpa || null,
      imageUrl: this.state.imageUrl || undefined,
      campusId: this.state.campusId || null,
    };
    await this.props.editStudent(student);
    this.setState({
      redirect: true,
      redirectId: student.id,
    });
  };

  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  // render function to render the EditStudentView component
  render() {
    if (this.state.redirect) {
        // afterwards reidrect back to the student page
      return <Redirect to={`/student/${this.state.redirectId}`} />;
    }
    return (
      <div>
        <Header />
        <EditStudentView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          student={this.state}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  student: state.student,
});

const mapDispatch = (dispatch) => ({
  fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
  editStudent: (student) => dispatch(editStudentThunk(student)),
});

export default connect(mapState, mapDispatch)(EditStudentContainer);