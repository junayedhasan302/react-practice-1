import "./StudentCard.css";
import type StudentType from "./StudentType";

const StudentCard = ({ id, name, grade }: StudentType) => {
  return (
    <div className="student-card">
      <img
        className="student-photo"
        src="/public/image.png"
        alt="Student"
      />

      <h2>STUDENT CARD</h2>

      <div className="student-info">
        <p>
          <span>Student ID</span>
          {id}
        </p>

        <p>
          <span>Student Name</span>
          {name}
        </p>

        <p>
          <span>Student Grade</span>
          {grade}
        </p>
      </div>

      <div className={grade >= 40 ? "status passed" : "status failed"}>
        {grade >= 40 ? "Passed" : "Fail"}
      </div>
    </div>
  );
};

export default StudentCard;