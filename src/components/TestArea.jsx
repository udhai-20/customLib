import { Button } from "dev-components-test";

const TestArea = () => {
  return (
    <div>
      <Button
        className="bg-pink-500"
        key="1"
        onClick={() => console.log("vhevk")}
      >
        Check
      </Button>
    </div>
  );
};

export default TestArea;
