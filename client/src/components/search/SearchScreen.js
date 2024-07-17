/**
 * File Name : SearchScreen
 * Description : 검색 후 화면, 약에 대한 설명
 * Author : 민선옥
 *
 * History
 * Date        Author   Status    Description
 * 2024.07.16  민선옥   Created
 * 2024.07.17  민선옥   PillMore추가
 *
 */

import React, { useState } from 'react';
import styled from 'styled-components';
import PillExp from './PillExp';

const SearchScreenContainer = styled.div``;

const PillHeader = styled.div`
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
    background-color: var(--main-color);
  }
`;

const PillMore = styled.div`
  margin-top: 60px;
`;

const Menu = styled.div`
  display: flex;
  border-bottom: 4px solid var(--main-color);

  & p {
    flex: 1;
    margin: 0;
    padding: 10px;
    text-align: center;
    cursor: pointer;
  }

  & p.active {
    border-radius: 10px 10px 0 0;
    background-color: var(--main-color);
  }
`;

const Contants = styled.div``;

function SearchScreen() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <SearchScreenContainer>
      <PillHeader>
        <img src={`${process.env.PUBLIC_URL}/img/pill.png`} alt='pill' />
        <section>
          <h3>타이레놀</h3>
          <Chips>
            <p>두통</p>
            <p>신경통</p>
            <p>근육통</p>
          </Chips>
        </section>
      </PillHeader>
      <PillMore>
        <Menu>
          <p
            className={activeTab === 0 ? 'active' : ''}
            onClick={() => setActiveTab(0)}>
            효능•용법
          </p>
          <p
            className={activeTab === 1 ? 'active' : ''}
            onClick={() => setActiveTab(1)}>
            리뷰
          </p>
        </Menu>
        <Contants>
          <PillExp />
        </Contants>
      </PillMore>
    </SearchScreenContainer>
  );
}

export default SearchScreen;
