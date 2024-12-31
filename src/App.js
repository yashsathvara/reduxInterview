import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Component/Signup';
import Login from './Component/Login';
import DashBoard from './Pages/DashBoard';
import ListItem from './Component/ListItem';
import AddItemForm from './Component/AddItemForm';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<DashBoard />}>
            <Route index element={<ListItem />} />
            <Route path='/addItemForm' element={<AddItemForm/>} />
          </Route>
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
