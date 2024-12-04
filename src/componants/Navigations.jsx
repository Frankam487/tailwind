import { NavLink } from "react-router-dom";

const Navigations = () => {
  return (
    <div className="navigations">
       <ul>
        <li>
          <NavLink to="/" className={(nav) => nav.isActive ? "nav" : ""}>Acceuil</NavLink>
        </li>
        <li>
          <NavLink className={(nav) => nav.isActive ? "nav" : ''} to="/about">A Propos</NavLink>
        </li>
        <li>
          <NavLink className={(nav) => nav.isActive ? "nav" : ''} to="/projects">Projets</NavLink>
        </li>
      </ul> 
      
    </div>
  );
};

export default Navigations;