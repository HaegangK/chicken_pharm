/** @format */
/**
File Name : Nav
Description : 하단 네브게이션바
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/ 

import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100vw;
  height: 100px;
  & ul {
    display: flex;
    justify-content: space-evenly;
    padding: 0;
    & li {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      & img {
        width: 35px;
      }
      & p {
        margin: 0;
        color: #c6c6c6;
        font-size: 12px;
        font-weight: bold;
      }
    }
  }
`;

function Nav() {
  return (
    <NavContainer>
      <ul>
        <li>
          <img src={`${process.env.PUBLIC_URL}/img/home.png`} alt="Home" />
          <p>홈</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/talk.png`}
            alt="talk"
            style={{ width: "40px" }}
          />
          <p>상담</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/calender.png`}
            alt="calender"
          />
          <p>캘린더</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/user.png`}
            alt="user"
            style={{ width: "30px" }}
          />
          <p>마이페이지</p>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
