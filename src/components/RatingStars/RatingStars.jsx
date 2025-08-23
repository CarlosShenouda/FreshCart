import { faStar as starSolid, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  export default function RatingStars(props) {

function getStarIcon(position) {
  if (props.rating >= position) {
    return starSolid;
  } else if (props.rating >= position - 0.5) {
    return faStarHalfStroke;
  } else {
    return starRegular;
  } 
}

  return <>
  <div className="rating text-yellow-300">
    {[1,2,3,4,5].map((position) => < FontAwesomeIcon icon={getStarIcon(position)} key={position}/> )}
  </div>
  
  
  
  </>
}
