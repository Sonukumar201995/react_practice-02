import { useContext } from "react";
import SubjectContext from "./ContextData";

function Subject() {
  const subject = useContext(SubjectContext);

  return (
    <div style={{ background: "red", padding: 10 }}>
      <h2>Subject is: {subject}</h2>
    </div>
  );
}

export default Subject;