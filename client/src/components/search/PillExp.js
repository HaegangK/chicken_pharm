/**
 * File Name : PillExp
 * Description : 약에 대한 설명
 * Author : 민선옥
 *
 * History
 * Date        Author   Status    Description
 * 2024.07.17  민선옥   Created
 */

import React, { useState } from 'react';
import styled from 'styled-components';

const PillExpContainer = styled.div`
  border: 1px solid #bfbfbf;
  margin: 10px;
`;

function PillExp() {
  return (
    <>
      <PillExpContainer>
        <ul>
          <li>
            <b>성분</b>
            <p>아세트아미노펜</p>
          </li>
          <li>
            <b>효능 및 효과</b>
            <p>발열, 두통, 근육통, 관절통 등</p>
          </li>
          <li>
            <p>임산부도 안전하게 복용 가능해요.</p>
            <small>장기 복용시에는 자폐증 등의 위험을 높일 수 있다는 연구 결과가 있어요. <br/>과도한 복용은 하지 말아야 해요.</small>
          </li>
        </ul>
      </PillExpContainer>
      <p>증상이 더 악화된다면 '<span>내과, 이비인후과</span>'를 방문해 처방약을 복용해보세요!</p>
    </>
  );
}

export default PillExp;
