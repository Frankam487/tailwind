import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigations">
       <ul>
        <li>
          <NavLink to="/">Acceuil</NavLink>
        </li>
        <li>
          <NavLink to="/about">A Propos</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projets</NavLink>
        </li>
      </ul> 
      
    </div>
  );
};

export default Navigations;