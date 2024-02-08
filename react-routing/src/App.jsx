import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/Home";
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Competitions from './pages/Competitions';
import CompetitionDetails from './pages/CompetitionDetails';

import competitions from "./assets/data/data.json";

function App() {

  return (
    <main>
    <Navbar />
      {/* Routes calls the space where I create each Route */}
      <Routes>

        {/* Route is a tool that renders a Component depending on the URL */}

        {/* In this case, if we're in http://localhost:5173, the path is "/" because we did not write anything more to the original URL */}

        {/* For this path, I'll render HomePage Component. */}
        <Route path="/" element = {<HomePage />} />

        <Route path="/about" element={<About />} />

        <Route path="/competitions" element = {<Competitions/>} />

        <Route path="/competitions/:competitionId" element={<CompetitionDetails competitions={competitions} />} />

        {/* Create a Route to render a error page to every possible path that is not equal to any one of the paths above */}
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  )
}

export default App
