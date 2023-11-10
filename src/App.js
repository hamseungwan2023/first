import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Login from "./main/loginPage/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
