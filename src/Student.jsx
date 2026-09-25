import Subject from "./Subject";

function Student() {
  return (
    <div style={{ background: "green", padding: 10 }}>
      <h2>Student component</h2>
      <Subject />
    </div>
  );
}

export default Student;