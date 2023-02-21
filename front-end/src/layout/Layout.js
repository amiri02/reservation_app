import React from "react";
import Routes from "./Routes";
import Navbar from "./Navbar";

/**
 * Defines the main layout of the application.
 * You will not need to make changes to this file.
 * @returns {JSX.Element}
 */
function Layout() {
  return (
    <div
      className="container-fluid bg-dark"
      style={{
        fontFamily: "Courier",
        color: "#228b22",
        height: "200vh",
      }}
    >
      <h1 className="d-flex justify-content-center pt-4">Periodic Tables</h1>
        <div className="row p-0">
          <Navbar />
        </div>
      <div className="">
        <div className="">
          <Routes />
        </div>
      </div>
    </div>
  );
}

export default Layout;