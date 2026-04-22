// src/App.jsx
// Central routing configuration using React Router v6

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All routes nested under MainLayout inherit Header + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          {/* Add more routes here, e.g.:
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
          */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
