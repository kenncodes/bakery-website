import bakery from '../bakery.jpg';
import thebakery from '../thebakery.jpg'
import cakeDesktop from '../cakesDesktop.png'
import pastryshop from '../pastryshop.png'

const Banner = () => {
  return (
    <div className="banner">
      <img className="bannerImg" alt="bakery" src={pastryshop} width="100%"/>
    </div>
  );
};

export default Banner;
