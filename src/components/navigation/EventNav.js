import { Link } from "react-router-dom"
import { events } from '../../utility/events.js'

const EventNav = () => {

  const eventLinks = Object.values(events).map((event) => {
    return (
      <Link key={Math.random()} to={`/events/${event.slug}`}>{event.name}</Link>
    );
  });

  return (
    <div>
      {eventLinks}
    </div>
  )
}

export default EventNav;