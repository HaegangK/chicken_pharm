/**
File Name : Search
Description : 검색화면
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
*/

import React, { useState } from 'react';
import SearchBox from './SearchBox';
import SearchHistory from './SearchHistory';
import SearchScreen from './SearchScreen';
import Nav from '../Nav';
import styled from 'styled-components';

const BackgroundHeader = styled.div`
  position: relative;
  margin-bottom: 40px;
  width: 100vw;
  height: 55px;
  background-color: var(--main-color);
`;

function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <BackgroundHeader>
        <SearchBox setSearchQuery={setSearchQuery} />
      </BackgroundHeader>
      {searchQuery ? <SearchScreen searchQuery={searchQuery} /> : <SearchHistory />}
      <Nav />
    </>
  );
}

export default Search;
