import students from "./StudentData";
import StudentCard from "./StudentCard";

function StudentList() {
    return (
        <div>
            <hr />
            {
                students.map((student) => (
                    <StudentCard
                        key={student.id}
                        id={student.id}
                        name={student.name}
                        grade={student.grade}
                    />
                ))
            }
        </div>
    );
}

export default StudentList;