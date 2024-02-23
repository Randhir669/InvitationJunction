
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Footer from './Components/Footer';
import Banner from './Components/Banner';
import Top from './Components/Top';
function App() {
  return (

    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
             <div className='row'>
             <Banner status={true} />
              </div>
             
              <div className='row'>
                <Navbar/>
              </div>
              <div className='row mt-28' >
                <Main status={true} />
              </div>
              <div className='row mt-28' >
                <Footer status={true} />
              </div>
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>







  );
}

export default App;
