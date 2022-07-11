import "./App.css";
import UserList from "./features/users/UserList";
import AddUser from "./features/users/AddUser";
import UpdateUser from "./features/users/UpdateUser";
import Courselist from "./features/users/Courselist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCourse from "./features/users/AddCourse";
import UpdateCourse from "./features/users/UpdateCourse";

function App() {
  return (
    <div className="container mx-auto px-2 max-w-5xl pt-10 md:pt-35">
      <h1 className="text-center font-bold text-4xl text-gray-700">
        Student Registration System.
      </h1>
      <h4 className="text-center text-1xl text-gray-700">
       
      </h4>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/add-course" element={<AddCourse/>} />
          <Route path="/edit-user/:id" element={<UpdateUser />} />
          <Route path="/show-course" element={<Courselist />} />
          <Route path="/edit-course/:id" element={<UpdateCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
