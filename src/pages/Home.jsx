import Icons from "../componants/Icons";
import Navigations from "../componants/Navigations";

const Home = () => {
  return (
    <div className="home">
      <Navigations/>
      
      <div className="home-container">
        <img src="./w.jpg" alt="" />
        <h1>Salut , J'suis Frank_Kamgang</h1>
        <h3>J'Suis un Web Developpeur</h3>
        
      </div>
     <Icons/>
    </div>
  );
};

export default Home;