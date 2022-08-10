import { Routes, Route } from "react-router-dom";

import{Home} from "../pages/Home"
import{Details} from "../pages/Details"
import{Purchases} from "../pages/Purchases"
import{Favorites} from "../pages/Favorites"


export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/details/:id" element ={<Details />}/>
      <Route path="/purchases" element ={<Purchases />}/>
      <Route path="/favorites" element ={<Favorites />}/>
    </Routes>
  )
}