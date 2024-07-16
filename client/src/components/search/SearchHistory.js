/** @format */

/**
File Name : ShearchHistory
Description : 검색히스토리 시각화
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/ 

import styled from "styled-components";

const HistoryCotainer = styled.div`
  padding-top: 30px;
`;

const HistoryInner = styled.div`
  width: 85vw;
  margin: auto;
`;

const HistoryTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: #686868;
  font-size: 15px;
  font-weight: 500;
`;

function SearchHistory() {
  return (
    <HistoryCotainer>
      <HistoryInner>
        <HistoryTitle>
          <span>최근 검색어</span>
          <span>전체삭제</span>
        </HistoryTitle>
      </HistoryInner>
    </HistoryCotainer>
  );
}

export default SearchHistory;
