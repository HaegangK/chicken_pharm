import { ChangeEvent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSearchStore } from '../store/search';
import { useSearchHistoryStore } from '../store/searchHistory';

const SearchBox = () => {
  const { searchQuery, setSearchQuery } = useSearchStore();
  const [query, setQuery] = useState(searchQuery);
  const addHistory = useSearchHistoryStore((state) => state.addHistory);

  // 입력값이 변경될 때
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // 로컬 상태에 검색어 저장
  };

  // Enter 키 입력
  const handleSearch = () => {
    if (query.trim()) {
      setSearchQuery(query); // 상위 컴포넌트에 검색어 설정
      addHistory(query); // 검색 히스토리에 검색어 추가
    }
  };

  useEffect(() => {
    const handleEnterKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleSearch();
      }
    };

    window.addEventListener('keydown', handleEnterKey);

    return () => {
      window.removeEventListener('keydown', handleEnterKey);
    };
  }, [query]);
  
  // searchQuery가 변경될 때 로컬 상태 업데이트
  useEffect(() => {
    setQuery(searchQuery);
  }, [searchQuery]);

  return (
    <>
      <Link to='/search' onClick={handleSearch}>
        <SearchContainer>
          <SearchIcon
            src={`/img/search_icon.png`}
            alt='search'
            style={{ width: '20px' }}
          />

          <SearchInput
            placeholder='이미지 또는 이름으로 검색'
            value={query}
            onChange={handleChange}
          />
          <SearchIcon src={`/img/camera.png`} alt='camera' />
        </SearchContainer>
      </Link>
    </>
  );
};

export default SearchBox;

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
  cursor: pointer;
`;
