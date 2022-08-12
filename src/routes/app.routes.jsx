import { Routes, Route } from "react-router-dom";

import{Home} from "../pages/Home"
import{Details} from "../pages/Details"
import{Purchases} from "../pages/Purchases"
import{Favorites} from "../pages/Favorites"
import{Profile} from "../pages/Profile"
import{Address} from "../pages/Address"
import{Payment} from "../pages/Payment"


export function AppRoutes(){

  return(
    <Routes>
      <Route path="/" element ={<Home />}/>
      <Route path="/details/:id" element ={<Details />}/>
      <Route path="/purchases" element ={<Purchases />}/>
      <Route path="/favorites" element ={<Favorites />}/>
      <Route path="/profile" element ={<Profile />}/>
      <Route path="/address" element ={<Address />}/>
      <Route path="/payment" element ={<Payment />}/>
    </Routes>
  )
}