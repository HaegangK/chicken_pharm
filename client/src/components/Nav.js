/** @format */
import styled from "styled-components";

const NavContainer = styled.nav`
  position: fixed;
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
          <img src={`${process.env.PUBLIC_URL}/img/home.png`} alt="Logo" />
          <p>홈</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/talk.png`}
            alt="Logo"
            style={{ width: "40px" }}
          />
          <p>상담</p>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/img/calender.png`} alt="Logo" />
          <p>캘린더</p>
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/user.png`}
            alt="Logo"
            style={{ width: "30px" }}
          />
          <p>마이페이지</p>
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;
