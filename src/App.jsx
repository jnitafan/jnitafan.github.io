import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components";
import { ShortCourseExample, ConnectExample } from "./statics";

const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connect_samples" element={<ConnectExample />} />
        <Route path="/shortcourses" element={<ShortCourseExample />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
