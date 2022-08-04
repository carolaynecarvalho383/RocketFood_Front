import { Container , Nav} from "./styles";
import { ImExit } from "react-icons/im"
import { Logo } from "../Logo"
import { Button } from "../Button"
import { SearchBar } from "../SearchBar"
import { AiFillShopping, AiOutlineHeart, } from "react-icons/ai"
import{FiHexagon} from "react-icons/fi"

export function Header() {




  return (
    <Container>
      <Logo className="logo"
        icon={<FiHexagon className="icon2" size={25}/>}
        title="Food Explorer"
      />
      <SearchBar />
      <Nav>
        <a href="#">
          <AiOutlineHeart color="#750310" />
          favoritos
        </a>

        <Button icon={<AiFillShopping size={25} />}
          title="(0)" />

        <ImExit color="#FFFFFF" size={25}/>
      </Nav>


    </Container>
  )
}