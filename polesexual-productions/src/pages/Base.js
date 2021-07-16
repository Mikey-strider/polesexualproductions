import { BrowserRouter } from 'react-router-dom';
import MainNav from '../components/navigation/MainNav';
import Router from './Router';
import EventNav from '../components/navigation/EventNav';

const Base = () => {
  return (
    <BrowserRouter>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <MainNav />
        <Router />
        <EventNav />
      </div>
    </BrowserRouter>
  )
}

export default Base;
