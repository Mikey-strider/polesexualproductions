import { Redirect, useParams } from "react-router-dom";
import { events } from '../utility/events';

const Event = () => {
  const {slug} = useParams();

  if (!slug || !Object.keys(events).includes(slug)){
    return <Redirect to="/" />;
  }

  const Page = events[slug].pageComponent;

  console.log(Page);

  return (
    <Page>
      {events[slug].name} 
    </Page>
  )
}

export default Event;