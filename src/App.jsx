// import "./App.css";
import Button from "./components/Button";
import TestArea from "./components/TestArea";
import "dev-components-test-v2/dist/style.css";
function App() {
  return (
    <>
      <p>Focus Buddy</p>
      <p>Old</p>
      <Button
        className={"bg-red-500 hover:bg-green-600"}
        onClick={() => console.log("check")}
      >
        Whsdsdy
      </Button>
      <p>New</p>
      <TestArea />
    </>
  );
}

export default App;
