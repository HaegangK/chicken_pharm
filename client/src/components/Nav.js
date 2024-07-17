/**
File Name : Nav
Description : 하단 네브게이션바
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
2024.07.17  민선옥   알람설정 추가
*/

import styled from 'styled-components';

const NavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100vw;
  height: 80px;
  background-color: #ffffff;
  & ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
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
          <img
            src={`${process.env.PUBLIC_URL}/img/nav/talk.png`}
            alt='talk'
            style={{ width: '40px' }}
          />
          <p>상담</p>
        </li>
        <li style={{ marginRight: '15px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/img/nav/calender.png`}
            alt='calender'
          />
          <p>캘린더</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/nav/home.png`}
            alt='Home'
            style={{ position: 'absolute', top: '-20px', width: '50px' }}
          />
        </li>
        <li style={{ marginLeft: '15px' }}>
          <img
            src={`${process.env.PUBLIC_URL}/img/nav/bell.svg`}
            alt='bell'
            style={{ width: '30px' }}
          />
          <p>알람설정</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/nav/user.png`}
            alt='user'
            style={{ width: '30px' }}
          />
          <p>마이페이지</p>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
