/** @format */

/**
File Name : Header
Description : 좌측 상단의 작은 로고 구현
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/ 

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
