import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import FeatureCompany from './Components/FeatureCompany';
import Clients from './Components/Clients';
import DigialMarketing from './Components/DigialMarketing';
import GrowthPartner from './Components/GrowthPartner';
import ActualResult from './Components/ActualResult';
import Learning from './Components/Learning';
import Footer from './Components/Footer';
import HitGoals from './Components/HitGoals';
import StartEarning from './Components/StartEarning';
import BackToTop from './Components/BackToTop';

function App() {
  return (
    <>
    <BackToTop/>
      <Header />
      <FeatureCompany />
      <Clients/>
      <DigialMarketing />
      <GrowthPartner/>
      <ActualResult />
      <StartEarning/>
      <Learning />
      <HitGoals/>
      <Footer/>
      
    </>
  );
}

export default App;
