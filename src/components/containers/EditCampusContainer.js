import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { fetchCampusThunk, editCampusThunk } from '../../store/thunks';

class EditCampusContainer extends Component {
  // Initialize state
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
      redirect: false,
      redirectId: null,
    };
  }

  // Fetch the campus details when the component mounts
  async componentDidMount() {
    const campusId = this.props.match.params.id;
    await this.props.fetchCampus(campusId);
    const { name, address, description, imageUrl } = this.props.campus;
    this.setState({ name, address, description, imageUrl });
  }

  // Capture input data when it is entered
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  // Take action after user clicks the submit button
  handleSubmit = async (event) => {
    event.preventDefault(); // Prevent browser reload/refresh after submit.

    const campus = {
      id: this.props.campus.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl || undefined, // Use default if empty
    };

    // Edit the campus in the back-end database
    await this.props.editCampus(campus);

    // Redirect to the updated campus's page
    this.setState({
      redirect: true,
      redirectId: campus.id,
    });
  };

  // Unmount when the component is being removed from the DOM:
  componentWillUnmount() {
    this.setState({ redirect: false, redirectId: null });
  }

  // Render the edit campus form
  render() {
    // Redirect to the updated campus's page after submit
    if (this.state.redirect) {
      return <Redirect to={`/campus/${this.state.redirectId}`} />;
    }

    // Display the input form via the corresponding View component
    return (
      <div>
        <Header />
        <EditCampusView
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          campus={this.state}
        />
      </div>
    );
  }
}

// Map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// Map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
  };
};

// Export store-connected container by default
export default connect(mapState, mapDispatch)(EditCampusContainer);