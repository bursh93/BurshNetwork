import React from "react"
import {NavLink} from "react-router-dom";



export const Navbar=()=>{

    return (
            <div className="navbar navbar-dark  ">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                            <NavLink exact className="nav-link" to="/profile">
                                <i className="fas fa-camera"> </i>
                                Profile</NavLink>

                    </li>
                    <li>
                        <NavLink exact className="nav-link" to="/message">
                            <i className="fa fa-envelope-open"> </i>
                            message</NavLink>
                    </li>
                    <li>
                        <NavLink  exact className="nav-link" to="/users">
                            <i className="fa fa-user"> </i>
                            users</NavLink>
                    </li>
                    <li>
                        <NavLink  exact className="nav-link" to="/fotos">
                            <i className="fa fa-camera"> </i>
                            fotos</NavLink>
                    </li>
                </ul>



    </div>)
}