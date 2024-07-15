/** @format */
import styled from "styled-components";

// 스타일드 컴포넌트 정의
const HeaderContainer = styled.header`
  /* 원하는 스타일을 여기에 작성하세요 */
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
