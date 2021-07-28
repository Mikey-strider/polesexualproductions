import { Link } from "react-router-dom";
import { events } from '../../utility/events.js';
import Footer from "../pageComponents/footer.js";
import Header from "../pageComponents/header.js";
// import { FooterPage } from "../styled.js";

const EventNav = () => {

  const eventLinks = Object.values(events).map((event) => {
    return (
      <Link key={Math.random()} to={`/events/${event.slug}`}>{event.name}</Link>
    );
  });

// const styles = {FooterPage};

  return (
    <div>
      <Header />
      {eventLinks}
      <Footer />
    </div>
  )
}

export default EventNav;