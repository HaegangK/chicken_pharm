
/**
File Name : SearchBox
Description : 검색 Input 창
Author : 민선옥

History
Date        Author   Status    Description
2024.07.16  민선옥   Created
2024.07.16  임지영   Modified    placeholder 추가
*/

import styled from 'styled-components';

const SearchContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
  width: 90vw;
  height: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const SearchInput = styled.input`
  flex: 1;
  height: 100%;
  border: none;
  outline: none;
  background: none;

  &::placeholder {
    color: #6c6b6b;
  }
`;

const SearchIcon = styled.img`
  width: 24px;
`;

function SearchBox({ placeholder, setSearchQuery }) {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchIcon
        src={`${process.env.PUBLIC_URL}/img/search_icon.png`}
        alt='search'
        style={{ width: '20px' }}
      />
      <SearchInput placeholder={placeholder} onChange={handleChange} />
      <SearchIcon
        src={`${process.env.PUBLIC_URL}/img/camera.png`}
        alt='camera'
      />
    </SearchContainer>
  );
}

export default SearchBox;
