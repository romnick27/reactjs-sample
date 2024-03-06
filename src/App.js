import logo from './logo.svg';
import './App.css';
import { StandardCard2Collection, SocialPostCollection, NavBarHeader2, NavBarSide, MarketingFooter } from './ui-components'
function App() {
  return (
    <>
     <NavBarHeader2 width="100%" marginButton='20px' />
      <StandardCard2Collection />
      <SocialPostCollection />
    <MarketingFooter width="100%" />
    < />
  );
}

export default App;
