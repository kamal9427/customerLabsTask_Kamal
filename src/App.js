import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SaveSegment from "./Pages/SaveSegment";
import SaveAudience from "./Pages/SaveAudience";

function App() {

  return (
    <div className="App_container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SaveSegment />} />
          <Route path="/save" element={<SaveAudience />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
