/**
File Name : News
Description : 카드뉴스 
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
2024.07.17  임지영   Modified    Nav 추가
2024.07.21  임지영   Modified    코치님 코드 리뷰 수정
*/

import styled from 'styled-components';
import Header from '../Header';
import NewsTitle from './NewsTitle';
import NewsSlide from './NewsSlide';
import NewsDescription from './NewsDescription';
import Nav from '../Nav';

const NewsContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

interface NewsNumber {
  num: number;
}

const NEWS = [
  {
    bigTitle: '음주 후 복용 멈춰',
    smallTitle: '해열제 종류 성분에 대해서 알아봐요',
    description: `여러분들은 음주 후 복용하면 ❌절대 안 되는❌ 약에는 <br /> 어떤 것들이 있는지 알고 계신가요?🤔🍺 <br /> 💊이약뭐약💊과 함께 <br />술 마시고 먹으면 절!대! 안 되는 약 7가지에 대해 알아봅시다`,
    images: ['/img/stop.png', 'stop img']
  },
  {
    bigTitle: '올바른 약 복용법',
    smallTitle: '약 복용법에 대해 QnA로 알아봅시다',
    description: `약 복용법에 대해서 잘 알고 계신 분~🙋‍♀️ <br />
            아플 때 먹는 약이 모르고 잘못된 방법으로 복용하면 오히려 <br />
            독이 될 수 있다?!🍄☠️ <br />입 벌려 이약뭐약의 약 복용법 들어간다
            (비장)`,
    images: ['/img/QnA.png', 'qna img']
  },
  {
    bigTitle: '해열제 성분 종류',
    smallTitle: '해열제 종류 성분에 대해서 알아봐요',
    description: `아 몸이 으슬으슬
            <br /> 나 지금 열나는 거 같은데.. 🤒 <br />
            이렇게 생각들 땐 이미 늦었다🚨 지금 당장 이약뭐약과 함께
            <br />
            해열제 성분 종류에 대해 알아보자!! 7가지에 대해 알아봅시다`,
    images: ['/img/pillIcon.png', 'pill img']
  }
];

const News = ({ num }: NewsNumber) => {
  const { bigTitle, smallTitle, description, images } = NEWS[num - 1];
  return (
    <NewsContainer>
      <Header />
      <NewsTitle bigTitle={bigTitle} smallTitle={smallTitle} images={images} />
      <NewsSlide num={num} />
      <NewsDescription description={description} />
      <Nav />
    </NewsContainer>
  );
};

export default News;
