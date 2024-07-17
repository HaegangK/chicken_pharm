/**
 * File Name : PharmExp
 * Description : 검색 후 화면, 약에 대한 설명
 * Author : 민선옥
 *
 * History
 * Date        Author   Status    Description
 * 2024.07.16  민선옥   Created
 *
 */

import styled from 'styled-components';

const PharmExpContainer = styled.div``;

const PharmHeader = styled.div`
  display: flex;
  width: 80vw;
  margin: auto;
  & section {
    margin-left: 30px;
  }
`;

const Chips = styled.div`
  display: flex;
  width: 100%;
  height: 30px;

  & p {
    width: 45px;
    height: 25px;
    margin-right: 10px;
    font-size: 13px;
    font-weight: 600;
    text-align: center;
    line-height: 25px;
    background-color: #ffe612;
  }
`;

const PharmExplanation = styled.div``;

function PharmExp() {
  return (
    <PharmExpContainer>
      <PharmHeader>
        <img src={`${process.env.PUBLIC_URL}/img/pill.png`} alt='pill' />
        <section>
          <h3>타이레놀</h3>
          <Chips>
            <p>두통</p>
            <p>신경통</p>
            <p>근육통</p>
          </Chips>
        </section>
      </PharmHeader>
      <PharmExplanation></PharmExplanation>
    </PharmExpContainer>
  );
}

export default PharmExp;
