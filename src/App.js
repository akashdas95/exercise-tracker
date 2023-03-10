import React from 'react'; 
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Navbar from './components/navbar.component';
import ExercisesList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import SignIn from './components/SignIn';

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>  
        <Route path= '/' element={<ExercisesList/>}/>
        <Route path= '/edit/:id' element={<EditExercise/>}/>
        <Route path= '/create' element={<CreateExercise/>}/>
        <Route path= '/user' element={<CreateUser/>}/>
      </Routes>
    </>
  );
}

export default App;
