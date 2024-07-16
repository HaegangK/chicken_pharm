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


import styled from "styled-components";

const PharmHeader = styled.div`
`
const Ache = styled.div`
  width: 30px;
  height: 15px;
  background-color: #ffe612;
`;

const PharmExplanation = styled.div``;

function PharmExp() {
  return (
    <>
      <PharmHeader>
        <img src={`${process.env.PUBLIC_URL}/img/pill.png`} alt="pill" />
        <h3>타이레놀</h3>
        <Ache></Ache>
      </PharmHeader>
      <PharmExplanation></PharmExplanation>
    </>
  );  
}

export default PharmExp;


