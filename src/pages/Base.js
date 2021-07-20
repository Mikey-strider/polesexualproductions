import { BrowserRouter } from 'react-router-dom';
import MainNav from '../components/navigation/MainNav';
import Router from './Router';
import EventNav from '../components/navigation/EventNav';
import { BaseWrapper, GlobalStyle } from '../components/styled';

const Base = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <BaseWrapper>
        <MainNav />
        <Router />
        <EventNav />
      </BaseWrapper>
    </BrowserRouter>
  )
}

export default Base;
