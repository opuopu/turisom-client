import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Authprovider from './context/authprovider';
import Header from './PAGES/Header/Header';
import Home from './PAGES/home/Home';
import Footer from './PAGES/footer/Footer';
import Addservice from './PAGES/addservice/Addservice';
import Login from './PAGES/login/Login';
import Privateroute from './PAGES/login/Privateroute';
import Book from './PAGES/book/Book';
import Mybooking from './PAGES/mybooking/Mybooking';
import Manage from './PAGES/manage/Manage';
import Notfound from './PAGES/notfound/Notfound';

function App() {
  return (
  <Authprovider>
     <BrowserRouter>
<Header></Header>

<Switch>

  <Route exact path ='/'>
    <Home></Home>

  </Route>
  <Route excat path="/home">
<Home></Home>
  </Route>

<Privateroute path="/addservice">
<Addservice></Addservice>
</Privateroute>
<Route path="/login">
<Login></Login>
</Route>
<Privateroute path="/booking/:id">
<Book></Book>
</Privateroute>
<Privateroute path="/mybooking">
<Mybooking></Mybooking>
</Privateroute>

<Privateroute path="/managebooking">
<Manage></Manage>
</Privateroute>

<Route excat path="*">
<Notfound></Notfound>
</Route>
</Switch>
<Footer></Footer>
</BrowserRouter>
  </Authprovider>
  );
}

export default App;
