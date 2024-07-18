/**
File Name : CalendarPage
Description : 캘린더 페이지
Author : 임지영

History
Date        Author   Status    Description
2024.07.17  임지영   Created
*/

import styled from 'styled-components';
import Header from '../Header';
// import CalendarDetail from './CalendarDetail';
import CalendarSection from './CalendarSection';

const CalendarContainer = styled.div`
  width: 100vw;
`;

const CalendarPage = () => {
  return (
    <CalendarContainer>
      <Header />
      <CalendarSection />
      {/* <CalendarDetail /> */}
    </CalendarContainer>
  );
};

export default CalendarPage;
