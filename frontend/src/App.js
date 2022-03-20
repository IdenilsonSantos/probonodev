import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ActPage from './pages/ActPage/ActPage';
import LastActPage from './pages/LastActPage/LastActPage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './routes/protectedRoutes';

function App() {
  return (
   <BrowserRouter>
   <Routes>
   <>
   <Route exact path='/activities/last' element={<ProtectedRoute/>}>
      <Route exact path='/activities/last' element={<LastActPage/>}/>
</Route>
   <Route path="/" element={<ActPage/>} exact/>
     <Route path="/login" element={<LoginPage/>} exact/>
     
   </>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
