/** @format */
/**
File Name : Search
Description : 검색화면
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/ 

import React, { useState } from 'react';
import SearchBox from "./SearchBox"
import SearchHistory from "./SearchHistory";
import PharmExp  from "./PharmExp";
import Nav from "../Nav";
import styled from "styled-components";

const BackgroundHeader = styled.div`
  position: relative;
  width: 100vw;
  height: 55px;
  background-color: #ffe612;
`;

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <>
      <BackgroundHeader>
        <SearchBox setSearchQuery={setSearchQuery} />
      </BackgroundHeader>
      {searchQuery ? <PharmExp searchQuery={searchQuery} /> : <SearchHistory />}
      <Nav />
    </>
  );
}

export default Search;

