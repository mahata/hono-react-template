import { Route, Routes } from "react-router";
import Top from "./Top";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/test" element={<p>Test</p>} />
    </Routes>
  );
}

export default App;
