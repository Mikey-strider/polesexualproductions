import { useParams } from "react-router-dom";

const Event = () => {
  const {name} = useParams();

  return (
    <div>
      {name}
    </div>
  )
}

export default Event;