import { Link } from "react-router-dom"

const EventNav = () => {
  const events = [
    "Polesexual",
    "Cocktailgate",
    "Power",
    "Diva's Landing"
  ]

  const eventLinks = events.map((name, index) => {
    return (
      <Link key={Math.random()} to={`/events/${name.toLowerCase()}`}>{name}</Link>
    );
  });

  return (
    <div>
      {eventLinks}
    </div>
  )
}

export default EventNav;