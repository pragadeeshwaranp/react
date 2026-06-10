import React from "react";
import "./CourseCard.css";

function CourseCard1() {
  return (
    <div className="course-card">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuGYt-1OD9CiGb9-ZsHmpDlzrbTSVslCZojQ&s" alt="course" />
      <h2>React Development</h2>
      <p>Instructor: John Smith</p>
      <p>Duration: 12 Weeks</p>
      <p>Rating: ⭐ 4.8</p>
      <p>Fee: $99</p>
    </div>
  );
}

export default CourseCard1;
