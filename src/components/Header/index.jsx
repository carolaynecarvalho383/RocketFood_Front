import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth"

import { Logo } from "../Logo"
import { Button } from "../Button"
import { SearchBar } from "../SearchBar"

import { api } from "../../services/api";
import  avatarPlaceholder from "../../assets/avatar_placeholder.svg";


import { AiFillShopping, AiOutlineHeart, AiOutlineUser } from "react-icons/ai"
import { ImExit } from "react-icons/im"
import { FiHexagon } from "react-icons/fi"

import { Container, Nav } from "./styles";

export function Header() {

  const { signOut, user } = useAuth()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;


  return (
    <Container>

      <Logo className="logo"
        icon={<FiHexagon className="icon2" size={25} />}
        title="Food Explorer"
      />
      <SearchBar />
      <Nav>
        <Link to="/favorites">
          <AiOutlineHeart color="#750310" />
          favoritos
        </Link>
        <Link to="/buy" >
          <Button icon={<AiFillShopping size={25} />}
            className="myRequestes"
            title="Meus Pedidos (0)" />
        </Link>

        <Link to="/buy" >
          <Button icon={<AiFillShopping size={15} />}
            className="openButtonRequests"
            title=" (0)" />
        </Link>

        <Link to="/profile">
          <img src={avatarUrl} />
        </Link>

        <Link to="/" onClick={signOut}>
          <ImExit color="#FFFFFF" size={25} />
        </Link>
      </Nav>


    </Container>
  )
}