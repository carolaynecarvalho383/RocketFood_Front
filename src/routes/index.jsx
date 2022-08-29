import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdmRoutes } from "./adm.routes";

export function Routes() {
  const { user } = useAuth()
  // const admin = user.admin ===1 || []
  // console.log(admin);

  return (
    <BrowserRouter>
      {
        user ? <AppRoutes /> : <AuthRoutes />
          
          // || admin ? <AdmRoutes /> : <AuthRoutes />

      }
    </BrowserRouter>
  )
}