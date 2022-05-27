import "./AboutContainer.css";
import Location from "../components/Location";
import Pitch from "./Pitch";
import googlemap from "../googlemap.jpg"
import flag from '../flag.webp'
const AboutContainer = () => {
  return (
    <div>
      <Pitch/>
      <div className="cardContainer">
      <div className="card2">
          <img className="cardMap" src={googlemap} width="100%"/>
        </div>
        <div className="card1">
          <Location/>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
