/**
File Name : CalendarSection
Description : 달력 부분
Author : 임지영

History
Date        Author   Status    Description
2024.07.17  임지영   Created
*/

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import '../../styles/calendar.css';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pill = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/img/calendarPill.png`,
  alt: 'pill icon'
})`
  width: 15px;
  height: auto;
`;

const CalendarSection = () => {
  const [value, onChange] = useState(new Date());
  // 보여줄 현재 달(month)
  // const monthOfActiveDate = moment(value).format('YYYY-MM');
  // const [activeMonth, setActiveMonth] = useState(monthOfActiveDate);
  const addContent = ({ date, view }) => {
    return (
      <>
        <Pill />
      </>
    );
  };

  const tileClassName = ({ date }) => {
    if (date.getDay() === 0 /* 일요일 */) {
      return 'sunday';
    }
    if (date.getDay() === 6 /* 토요일 */) {
      return 'saturday';
    }
    return '';
  };

  return (
    <>
      <CalendarContainer>
        <Calendar
          // locale='en'
          onChange={onChange}
          value={value}
          calendarType='gregory'
          // prev2Label={null}
          // next2Label={null}
          // 일 없이 날짜 숫자만
          formatDay={(locale, date) => moment(date).format('D')}
          // 날짜 칸에 보여지는 컨텐츠 (우리는 알약)
          tileContent={addContent}
          // 앞뒤 달의 이어지는 날짜 보여주기 여부
          showNeighboringMonth={true}
          // 토요일, 일요일 색상 변경
          tileClassName={tileClassName}
        />
      </CalendarContainer>
      <div className='text-gray-500 mt-4'>{moment(value).format('M. DD')}</div>
    </>
  );
};

export default CalendarSection;
