import { useParams } from "react-router-dom";

export function TeacherDetails({ teachers }) {
  const { id } = useParams();
  const teacher = teachers[id];
  return (
    <div className="teacher-details">
      <h3>Hello all welcome to the teacher details page {teacher.name}</h3>
      <div className="card">
        <p>
          <strong>ID :</strong>
          {teacher.id}
        </p>
        <p>
          <strong>Name :</strong>
          {teacher.name}
        </p>
        <p>
          <strong>Gender :</strong>
          {teacher.gender}
        </p>
        <p>
          <strong>Subject :</strong>
          {teacher.subject}
        </p>
        <p>
          <strong>Address :</strong>
          {teacher.address}
        </p>
        <p>
          <strong>Email :</strong>
          {teacher.email}
        </p><p>
          <strong>Contact :</strong>
          {teacher.contact}
        </p>
      </div>
    </div>
  );
}
