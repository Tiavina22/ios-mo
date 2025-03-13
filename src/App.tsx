import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Examples } from './pages/Examples';
import { Documentation } from './pages/Documentation';
import { Installation } from './pages/Installation';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="examples" element={<Examples />} />
          <Route path="docs" element={<Documentation />} />
          <Route path="installation" element={<Installation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;