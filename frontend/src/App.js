// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import NewBlog from './pages/NewBlog'; // Import the NewBlog component
import UpcomingFeatures from './pages/UpcomingFeatures';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcoming" element={<UpcomingFeatures />} />
            <Route path="/newBlog" element={<NewBlog />} /> {/* Add this route */}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
