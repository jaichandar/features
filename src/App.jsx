import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Pagination from './pages/pagination';
import Dashboard from './pages/dashboard';
import Loader from './components/loader/index';
import Notification from './pages/notification';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/pagination' element={<Pagination />}/>
        <Route path='/loader' element={<Loader />} />
        <Route path='/notification' element={<Notification />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
