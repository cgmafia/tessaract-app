import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div
    style={{
        backgroundColor: '#3321',
        marginTop: '10'
        }}>
      <ul
        style={{
          alignContent: "center",
          listStyle: "none",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="/services/">SERVICES</Link>
        </li>
        <li>
          <Link to="/demobrowser/">DEMO PAGE</Link>
        </li>
        <li>
          <Link to="/contact/">CONTACT US</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
