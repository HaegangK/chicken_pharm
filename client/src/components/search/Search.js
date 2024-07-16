/** @format */
/**
File Name : Search
Description : 검색화면
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/ 

import SearchBox from "./SearchBox"
import SearchHistory from "./SearchHistory";
import Nav from "../Nav";
import styled from "styled-components";

const BackgroundHeader = styled.div`
  position: relative;
  width: 100vw;
  height: 55px;
  background-color: #ffe612;
`;

function Search() {
  return (
    <>
      <BackgroundHeader>
        <SearchBox/>
      </BackgroundHeader>
      <SearchHistory />
      <Nav />
    </>
  );
}

export default Search;
