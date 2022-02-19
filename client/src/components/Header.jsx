import { NavLink } from 'react-router-dom';

function Header(props) {
   return (
      <div className="container">
         <div className="row">
            <div className="col-3">
               <span className='nav-link'>GTD App</span>
            </div>
            <div className="col-9">
               <ul className="nav nav-tabs nav-fill">
                  <li className="nav-item">
                     <NavLink to="/" className="nav-link">Inbox</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/tasks" className="nav-link">Tasks</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/calendar" className="nav-link">Calendario</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/tickler-file" className="nav-link">Tickler File</NavLink>
                  </li>
                  <li className="nav-item">
                     <NavLink to="/incubator" className="nav-link">Incubadora</NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </div>
   )
}

export default Header;