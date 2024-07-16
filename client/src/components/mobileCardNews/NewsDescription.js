/**
File Name : NewsDescription
Description : 뉴스 하단 설명
Author : 임지영

History
Date        Author   Status    Description
2024.07.16  임지영   Created
*/

import styled from 'styled-components';
import '../../assets/font/font.css';

const DescriptionContainer = styled.div`
  margin: 5vh 8vw;
`;

const ChickenPharm = styled.div`
  font-weight: 600;
  font-size: 1rem;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.4;
  margin-top: 1.5vh;
`;

const NewsDescription = ({ num }) => {
  const handledescription = () => {
    if (num === 1) {
      return (
        <Description>
          여러분들은 음주 후 복용하면 ❌절대 안 되는❌ 약에는
          <br /> 어떤 것들이 있는지 알고 계신가요?🤔🍺
          <br /> 💊이약뭐약💊과 함께 <br />술 마시고 먹으면 절!대! 안 되는 약
          7가지에 대해 알아봅시다
        </Description>
      );
    } else if (num === 2) {
      return (
        <Description>
          약 복용법에 대해서 잘 알고 계신 분~🙋‍♀️ <br />
          아플 때 먹는 약이 모르고 잘못된 방법으로 복용하면 오히려 <br />
          독이 될 수 있다?!🍄☠️ <br />입 벌려 이약뭐약의 약 복용법 들어간다
          (비장)
        </Description>
      );
    } else {
      return (
        <Description>
          아 몸이 으슬으슬
          <br /> 나 지금 열나는 거 같은데.. 🤒 <br />
          이렇게 생각들 땐 이미 늦었다. 지금 당장 이약뭐약과 함께
          <br />
          해열제 성분 종류에 대해 알아보자!! 7가지에 대해 알아봅시다
        </Description>
      );
    }
  };

  return (
    <DescriptionContainer>
      <ChickenPharm>@chickenPharm</ChickenPharm>
      {handledescription()}
    </DescriptionContainer>
  );
};

export default NewsDescription;
