/**
File Name : Nav
Description : 하단 네브게이션바
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
2024.07.17  민선옥   Modified   알람설정 추가
2024.07.18  임지영   Modified    tsx
*/

import { useNavigate } from 'react-router-dom';
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

      &:hover {
        cursor: pointer;
        & img {
          fill: #ffe823;
        }
        & p {
          color: #ffe823;
        }
      }
    }
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
`;

const Nav: React.FC = () => {
  const navigate = useNavigate();

  const handleNav = (nav: string) => () => {
    switch (nav) {
      case 'calendar':
        return navigate('/calendar');
      case 'home':
        return navigate('/');
    }
  };

  return (
    <NavContainer>
      <ul>
        <li>
          <img src={`/img/nav/talk.png`} alt='talk' style={{ width: '40px' }} />
          <p>상담</p>
        </li>
        <li style={{ marginRight: '15px' }} onClick={handleNav('calendar')}>
          <img src={`/img/nav/calender.png`} alt='calender' />
          <p>캘린더</p>
        </li>
        <li onClick={handleNav('home')}>
          <img
            src={`/img/nav/home.png`}
            alt='Home'
            style={{ position: 'absolute', top: '-20px', width: '50px' }}
          />
        </li>
        <li style={{ marginLeft: '15px' }}>
          <img src={`/img/nav/bell.svg`} alt='bell' style={{ width: '30px' }} />
          <p>알람설정</p>
        </li>
        <li>
          <img src={`/img/nav/user.png`} alt='user' style={{ width: '30px' }} />
          <p>마이페이지</p>
        </li>
      </ul>
    </NavContainer>
  );
};

export default Nav;
