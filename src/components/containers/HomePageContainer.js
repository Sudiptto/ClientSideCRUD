/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

// Define styles for this component
const useStyles = makeStyles(() => ({
  root: {
    padding: '32px',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    color: '#11153e',
    fontWeight: 'bold',
    margin: '0 0 24px 0',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px auto',
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '20px',
  },
  buttonCard: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '220px',
    backgroundColor: 'white',
  },
  buttonTitle: {
    fontWeight: 'bold',
    marginBottom: '10px',
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  
  // Render Home page view
  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        Campus Management System
      </h1>
      
      <p className={classes.subtitle}>
        Manage your university campuses and student information
      </p>
      
      <div className={classes.buttonsContainer}>
        <div className={classes.buttonCard}>
          <h3 className={classes.buttonTitle}>View Campuses</h3>
          <p>Here you can view all the campuses & go in delete / add new campuses as you please.</p>
          <Link to="/campuses" style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth
            >
              All Campuses
            </Button>
          </Link>
        </div>
        
        <div className={classes.buttonCard}>
          <h3 className={classes.buttonTitle}>View Students</h3>
          <p>Here you can view all the current students & add potential new students or remove students who left.</p>
          <Link to="/students" style={{ textDecoration: 'none' }}>
            <Button 
              variant="contained" 
              color="primary"
              fullWidth
            >
              All Students
            </Button>
          </Link>
        </div>
      
      </div>
      <p>Note on routing: In the view campuses, you can edit/delete the campus & add students to campuses & such routes, clink on the link on each campus to get to the individual campus where you can find more data. For the All Students you can go in, add student, de-enroll and/or enroll students to campus (or delete them staight up). Same logic applies click on the student and you get to the individual student view</p>
    </div>
  );    
}

export default HomePageView;