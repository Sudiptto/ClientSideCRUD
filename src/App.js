import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  NewStudentContainer,
  NewCampusContainer,
  EditCampusContainer,
  EditStudentContainer
} from './components/containers';

// if you create separate components for adding/editing 
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/newstudent" component={NewStudentContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        {/*Add new campus route */}
        <Route exact path="/newcampus" component={NewCampusContainer} />
        {/* Edit campus */}
        <Route exact path="/editcampus/:id" component={EditCampusContainer} />
        {/* Edit student */}
        <Route exact path="/editstudent/:id" component={EditStudentContainer} />
      </Switch>        
    </div>
  );
}

export default App;
