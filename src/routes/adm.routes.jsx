import { Routes, Route } from "react-router-dom";

import{Adm} from "../pages/Admin/AdminHome";
import {AdmMenu} from "../pages/Admin/AdmMenu";
import{Edit} from "../pages/Admin/Edit"

export function AdmRoutes(){

  return(
    <Routes>
      <Route path="/" element ={<Adm />}/>
      <Route path="/administrator" element ={<AdmMenu />}/>
      <Route path="/edit" element ={<Edit />}/>
    </Routes>
  )
}