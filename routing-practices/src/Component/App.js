import {Component} from "react"
import Aside from "./Aside"
import Main from "./Main"
import PageNotFound from "./PageNotFound"
import Help from "./Help"
import {Route,Routes,NavLink } from "react-router-dom";

export default class App extends Component{
    constructor(props){
        super()
    }
    render(){
        return(
           <>
           <header>
           <NavLink
  to="/article"
>
  Home
</NavLink>
<NavLink
  to="/help"
>
  Help
</NavLink>
           </header>
    <main>
        <Routes>
    <Route path="/article">
    <Route path="/article" element={<Aside/>}></Route>
    <Route path=":slug" element={<Main/>}></Route>
    </Route>
    <Route path="/help" element={<Help />} />
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </main>
    </>
        )
    }
}