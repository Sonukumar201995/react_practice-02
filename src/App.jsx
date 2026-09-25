import College from "./College";
import SubjectContext from "./ContextData";

function App() {
  return (
    <div style={{ background: "yellow", padding: 10 }}>
      <SubjectContext.Provider value="English">
        <h2>Context API</h2>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;