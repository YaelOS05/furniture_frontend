import './project/styles.css';
import './project/layout-styles.css';
import './project/effect-styles.css';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { HomePage } from "../src/project/ExampleImplementation.tsx"
import Components from './project/Components.tsx';
import FirstExcersice from './project/views/FirstExcersice.tsx';
import Login from './project/views/Login.tsx';
import Attendance from './project/views/Attendance.tsx';
import SignUp from './project/views/SignUp.tsx';
import AllUsers from './project/views/AllUsers.tsx';
function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/message" element={<HomePage />} />
          <Route path="/components" element={<Components />} />
          <Route path="/excersice" element={<FirstExcersice />} />
          <Route path="/login" element={<Login />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<AllUsers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
