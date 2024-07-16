/**
File Name : News
Description : 카드뉴스 
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
*/

import styled from 'styled-components';
import Header from '../Header';
import NewsTitle from './NewsTitle';
import NewsSlide from './NewsSlide';
import NewsDescription from './NewsDescription';

const NewsContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const News = ({ num }) => {
  return (
    <NewsContainer>
      <Header />
      <NewsTitle num={num} />
      <NewsSlide num={num} />
      <NewsDescription num={num} />
    </NewsContainer>
  );
};

export default News;
