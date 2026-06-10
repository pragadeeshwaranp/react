import React from "react";
import CourseCard1 from "./CourseCard1";
import CourseCard2 from "./CourseCard2";
import CourseCard3 from "./CourseCard3";
import CourseCard4 from "./CourseCard4";
import CourseCard5 from "./CourseCard5";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>Online Learning Courses</h1>

      <div className="course-container">
        <CourseCard1 />
        <CourseCard2 />
        <CourseCard3 />
        <CourseCard4 />
        <CourseCard5 />
      </div>
    </div>
  );
}

export default App;
