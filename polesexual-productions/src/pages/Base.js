import { BrowserRouter } from 'react-router-dom';
import MainNav from '../components/navigation/MainNav';
import Router from './Router';
import EventNav from '../components/navigation/EventNav';
import { BaseWrapper } from '../components/navigation/components';

const Base = () => {
  return (
    <BrowserRouter>
      <BaseWrapper>
        <MainNav />
        <Router />
        <EventNav />
      </BaseWrapper>
    </BrowserRouter>
  )
}

export default Base;
