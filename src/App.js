import React from 'react';
import {Navbar} from "./navbar/navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {Profile} from "./Components/Profile/Profile";
import {Header} from "./Components/Header/Header";
import {Message} from "./Components/Message/Message";
import {Users} from "./Components/Users/Users";
import {Fotos} from "./Components/Foto/Foto";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>

                <div className="container">
                <div className="WrapperGridRoute">
                    <Navbar/>
                <Route path='/profile' render={()=><Profile/>}/>
                <Route path='/message' render={()=><Message/>}/>
                <Route path='/users' render={()=><Users/>}/>
                <Route path='/fotos' render={()=><Fotos/>}/>
                </div>
            </div>

            </div>
        </BrowserRouter>
    );
}


export default App;
