/**
File Name : CardNews
Description : 카드뉴스
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
*/

import styled from 'styled-components';

const Container = styled.div`
  margin: 8vh 8vw;
`;

const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 800;
`;

const News = styled.img.attrs({
  src: `${process.env.PUBLIC_URL}/img/news.png`,
  alt: 'News Icon',
})`
  width: 6vw;
  height: auto;
  margin-right: 2%;
`;

const Explanation = styled.div`
  font-size: 1rem;
  font-weight: 300;
  margin: 5px 0;
  color: #6c6b6b;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NewsImage = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  margin-top: 10%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: transform 0.5s ease-in-out;
  }

  &:hover img {
    transform: scale(1.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ num }) =>
        `url(${process.env.PUBLIC_URL}/img/back${num}.png)`}
      no-repeat center center / cover;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const News1 = () => (
  <NewsImage num={1}>
    <img src={`${process.env.PUBLIC_URL}/img/news1_1.png`} alt="News 1" />
  </NewsImage>
);

const News2 = () => (
  <NewsImage num={2}>
    <img src={`${process.env.PUBLIC_URL}/img/news2_1.png`} alt="News 2" />
  </NewsImage>
);

const News3 = () => (
  <NewsImage num={3}>
    <img src={`${process.env.PUBLIC_URL}/img/news3_1.png`} alt="News 3" />
  </NewsImage>
);

const CardNews = () => {
  return (
    <Container>
      <Title>
        <News />
        카드뉴스
      </Title>
      <Explanation>이약뭐약에서 제공하는 카드뉴스입니다</Explanation>
      <Contents>
        <News1 />
        <News2 />
        <News3 />
      </Contents>
    </Container>
  );
};

export default CardNews;
