import { Routes, Route } from "react-router-dom";

import{Adm} from "../pages/Admin/AdminHome"

export function AdmRoutes(){

  return(
    <Routes>
      <Route path="/" element ={<Adm />}/>
    </Routes>
  )
}