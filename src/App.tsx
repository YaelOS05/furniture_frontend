import './project/styles.css';
import { Link } from 'react-router-dom';
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import { HomePage } from "../src/project/ExampleImplementation.tsx"
function App() {

  return (
     <Router>
      <div className="App">
        <header className="App-header">

          {/* 👇 Este es tu link dentro de App.js */}
          <Link to="/about">Ir a About</Link>

          <br /><br />

          <Link to="/message">Ir a Home</Link>
        </header>

        {/* 👇 Aquí defines tus rutas */}
        <Routes>
          <Route path="/message" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
