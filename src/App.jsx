import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components";
import { ShortCourseExample, ConnectExample } from "./statics";

const App = () => {
  return (
    <HashRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive/connect_samples" element={<ConnectExample />} />
        <Route path="/archive/shortcourses" element={<ShortCourseExample />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
