import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Navbar from './components/Sheard/Navbar';

function App() {
  return (
      <div>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </div>
  );
}

export default App;
