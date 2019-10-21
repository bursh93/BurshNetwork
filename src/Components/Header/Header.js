import React from "react"





export const Header=()=>{

    return (

        <div className="header">
        <div className="container">
           <div className="WrapperFlexHeader">

        <span className="header-left">  {/*КНОПКА МЕНЮ И ИНПУТ ПОИСКА*/}
            <span>
            <button className="navbar-btn">
                <span></span>
                <span></span>
                <span></span>
            </button>
                </span>
            <span className="">
                <nav className=" navbar-light">
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </nav>
            </span>
        </span>



        <div className=""> {/*ВХОД НА САЙТ*/}
            <button type="button" className="btn btn-light">
                <i className="fa fa-sign-in-alt"></i>
            </button>
        </div>

        </div>
        </div>
    </div>)

}