import { Container } from "./styles";
import{FiHexagon} from "react-icons/fi"
export function Logo ({icon =  <FiHexagon className="icon" 
/>, title,...rest}){

  return(
    <Container {...rest}>
      {icon}
      
    
      <h1>{title}</h1>
    </Container>
  )
}