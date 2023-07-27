import './css/App.css';
import Wrapper from './component/Wrapper';
import Sub01 from './pages/Sub01';
import Sub02 from './pages/Sub02';
import Sub03 from './pages/Sub03';
import Sub04 from './pages/Sub04';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Header from './component/Header'



const App = () => {
  const MAINSLIDRE = [
    { id: 0, tit: "tit01", con: "sub_tit01", des: "des01", link: "/sub01" },
    { id: 1, tit: "tit02", con: "sub_tit02", des: "des02", link: "/sub02" },
    { id: 2, tit: "tit03", con: "sub_tit03 ", des: "des03", link: "/sub03" },
    { id: 3, tit: "tit04", con: "sub_tit04", des: "des04", link: "/sub04" },
    { id: 4, tit: "Login", con: "Login", des: "Login", link: "/Login" }
  ];
  return (
  <Wrapper>
     <Header /> 
      <Routes>
        <Route path='/' element={<Main content={MAINSLIDRE} />} />
        <Route path='/sub01' element={<Sub01 content={MAINSLIDRE} />} />
        <Route path='/sub02' element={<Sub02 content={MAINSLIDRE} />} />
        <Route path='/sub03' element={<Sub03 content={MAINSLIDRE} />} />
        <Route path='/sub04' element={<Sub04 content={MAINSLIDRE} />} />
        <Route path='/Login' element={<Login content={MAINSLIDRE}/>} />
      
      </Routes>

    </Wrapper>
  );
}

export default App;
