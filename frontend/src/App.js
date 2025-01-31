import ContextProvider from "./context/contextProvider";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./pages/Login.jsx";

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
