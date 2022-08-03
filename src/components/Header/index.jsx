import { Container , Nav} from "./styles";
import { ImExit } from "react-icons/im"
import { Logo } from "../Logo"
import { Button } from "../Button"
import { SearchBar } from "../SearchBar"
import { AiFillShopping, AiOutlineHeart, } from "react-icons/ai"

export function Header() {




  return (
    <Container>
      <Logo className="logo"
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