import Header from './Components/Header';
import Home from './Components/Home';
import ForCompanies from './Components/ForCompanies';
import ForDevelopers from './Components/Developers';
import Resources from './Components/Resources';
import BecomeaDeveloper from './Components/BecomeADeveloper';
import NotFound from './Components/NotFound';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import './App.css';
import HomePageProgam from './Components/HomePageProgram';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    
    
     <Routes> 

    <Route exact path='/' Component={Home}/>
    <Route exact path='/companies' Component={ForCompanies}/>
    <Route exact path='/developers' Component={ForDevelopers}/>
    <Route exact path='/resources' Component={Resources}/>
    <Route exact path='/become-a-developer' Component={BecomeaDeveloper}/>
    <Route exact path='/homepageprogram' Component={HomePageProgam}/>

    <Route Component={NotFound}/>
    
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
