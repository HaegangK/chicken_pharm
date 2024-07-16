/** @format */
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 15px;
`;

const Logo = styled.img`
  height: 40px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="Logo" />
    </HeaderContainer>
  );
}

export default Header;
