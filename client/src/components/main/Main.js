/**
File Name : Main
Description : 메인페이지
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
2024.07.17  임지영   Modified    Nav 추가
*/

import styled from 'styled-components';
import MainHeader from './MainHeader';
import CardNews from './CardNews';
import Nav from '../Nav';

const MainContainer = styled.div`
  width: 100vw;
`;

const Main = () => {
  return (
    <MainContainer>
      <MainHeader />
      <CardNews />
      <Nav />
    </MainContainer>
  );
};

export default Main;
