import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './componants/Navbar/Navbar';
import Course from './componants/Course/Course';
import courseData from './courseData';
import { useState } from 'react';
import Cart from './componants/Cart/Cart';

function App() {

  const [course, setCourse] = useState(courseData);
  const [cart, setCart] = useState([]);
  
  const handleBuyCourse = (courseDetails) => {
    console.log ("product added", courseDetails);
    const newCart = [...cart, courseDetails];
    setCart(newCart);
  }
  return (
    <div>

      <Navbar cart = {cart}></Navbar>

      <div className= "main-container">
        <div className ="course-container">
          {
          course.map( courseDetails => <Course courseDetails = {courseDetails} handleBuyCourse = {handleBuyCourse}></Course>)
          }
        </div>

        <div className = "calculation-container mt-3 pl-3">
          <h3 className = "text-center font-weight-bold">Order summary</h3>
          <h5>Total course: {course.length}</h5>
          <Cart cart= {cart}></Cart>
        </div>
      </div>
      
    </div>
  );
}

export default App;
