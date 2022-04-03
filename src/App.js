import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Users from './Components/Users/Users';
import UserDetail from './Components/UserDetail/UserDetail';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/users/:userId" element={<UserDetail />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
