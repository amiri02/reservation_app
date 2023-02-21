import React from "react"
import {Link} from "react-router-dom"

/**
 * Defines the menu for this application.
 * @returns {JSX.Element}
 */

function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav justify-content-center bg-dark" style={{backgroundColor: "#FFB93A", fontFamily: "Courier", margin: "0 auto"}}>
            <li className="nav-item p-1">
              <button type="button" className="btn m-1" data-toggle="tooltip" data-placement="bottom" title="Home">
                <Link className="nav-link text-white m-1" to="/">
                  <span className="material-icons m-1" style={{color: "#228b22"}}>
                    home
                  </span>
                  Home
                </Link>
              </button>
            </li>
            <li className="nav-item p-1">
              <button type="button" className="btn m-1" data-toggle="tooltip" data-placement="bottom" title="Search">
                <Link className="nav-link text-white m-1" to="/search">
                  <span className="material-icons m-1" style={{color: "#228b22"}}>
                    search
                  </span>
                  Search
                </Link>
              </button>
            </li>
            <li className="nav-item p-1">
              <button type="button" className="btn m-1" data-toggle="tooltip" data-placement="bottom" title="New Reservation">
                <Link className="nav-link text-white m-1" to="/reservations/new">
                  <span className="material-icons m-1" style={{color: "#228b22"}}>
                    local_dining
                  </span>
                  Reserve
                </Link>
              </button>
            </li>
            <li className="nav-item p-1">
              <button type="button" className="btn m-1" data-toggle="tooltip" data-placement="bottom" title="New Table">
                <Link className="nav-link text-white m-1" to="/tables/new">
                  <span className="material-icons m-1" style={{color: "#228b22"}}>
                    table_restaurant
                  </span>
                  Table
                </Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
