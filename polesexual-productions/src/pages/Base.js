import { BrowserRouter } from 'react-router-dom';
import MainNav from '../components/navigation/MainNav';
import Router from './Router';
import EventNav from '../components/navigation/EventNav';
import { BaseWrapper } from '../components/navigation/components';

const Base = () => {
  return (
    <BrowserRouter>
      <div component={BaseWrapper}>
        <MainNav />
        <Router />
        <EventNav />
      </div>
    </BrowserRouter>
  )
}

export default Base;
