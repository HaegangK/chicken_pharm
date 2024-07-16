/**
File Name : Main
Description : 메인페이지
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
*/

import styled from 'styled-components';
import '../../assets/font/font.css';
import MainHeader from './MainHeader';
import CardNews from './CardNews';

const MainContainer = styled.div`
  width: 100vw;
  font-family: 'Pretendard';
`;

const Main = () => {
  return (
    <MainContainer>
      <MainHeader />
      <CardNews />
    </MainContainer>
  );
};

export default Main;
