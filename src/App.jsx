import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pagination from './pages/pagination';
import Dashboard from './pages/dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/pagination' element={<Pagination />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
