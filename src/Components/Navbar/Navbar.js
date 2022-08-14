import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from 'react-use-cart'
import "./Navbar.css"
import image1 from "../../Assets/Images/logo.png"

const Navbar = () => {
    const {
        totalItems,
    } = useCart()
    return (
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center" }}>
            <div>
                <img src={image1} alt="fashion" width="150" />
            </div>
            <div className="nav" style={{ display: "flex", justifyContent: "space-between", gap: "25px", marginRight: "20px" }}>
                <NavLink to="/" >home</NavLink>
                <NavLink to="/about">about</NavLink>
                <NavLink to="/prodact">prodact</NavLink>
                <NavLink to="/contact">
                    <div className="admin" style={{ display: "flex", gap: "8px" }}>
                        <p>admin</p>
                        <i class="fa-solid fa-caret-down">
                            <ul>
                                <NavLink to="/contact"><li style={{ margin: "5px 0px ", letterSpacing: "3px" }}>admin</li></NavLink>
                                <NavLink to="/contact/add"><li style={{ letterSpacing: "3px" }}>new changes</li></NavLink>
                            </ul>
                        </i>
                    </div>
                </NavLink>
                <NavLink to="/card"><i className="fa-solid fa-cart-shopping" style={{ marginRight: "20px", fontSize: "30px" }}></i>
                    <span style={{
                        background: "#777", color: "#fff", fontSize: "20px",
                        padding: "3px 6px", position: "absolute", borderRadius: "8px", top: "25px", right: "23px"
                    }}>{totalItems}</span></NavLink>
            </div>
        </div>
    )
}
export default Navbar