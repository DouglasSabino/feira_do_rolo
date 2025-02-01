import ContextProvider from "./context/contextProvider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.jsx";
import "./styles.css";


function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
