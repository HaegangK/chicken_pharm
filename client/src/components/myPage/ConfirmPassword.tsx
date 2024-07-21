/**
File Name : EditMyInformation
Description : 내 정보 수정 페이지
Author : 오선아

History
Date        Author   Status    Description
2024.07.19  오선아   Created
*/

import styled from 'styled-components';
import { Icon } from '@iconify-icon/react';
import { ChangeEvent, useEffect, useState } from 'react';



const ConfirmPassword = ({onEdit}:{onEdit:()=>void}) => {
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsButtonEnabled(value.trim().length > 0);
  };

  useEffect(() => {
    setIsButtonEnabled(password.trim().length > 0);
    return () => {
    };
  }, [name]);  

  return (
    <MyPageContainer>
      <StyledContent>
        <div className='title'>안전한 변경을 위해 현재 비밀번호를 입력해 주세요</div>
        <div className="input-container">
          <input type="password" value={password} onChange={handleChange} placeholder='현재 비밀번호' />
          <div className='find-password'>비밀번호 찾기</div>
          <Icon className='clearButton' icon="pajamas:clear" width="1rem" height="1rem" 
                style={{color: "gray", display:isButtonEnabled? '' : 'none'}}
                onClick={()=>setPassword('')} />
        </div>
        <button className='submitButton' disabled={!isButtonEnabled} onClick={onEdit}>다음</button>
      </StyledContent>
    </MyPageContainer>
  );
};



const MyPageContainer = styled.div`
  width: 100%;
  height:70vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding:0px 20px 0px 20px;
`;

const StyledContent = styled.div`
  width:100%;
  height:100%;
  display: flex;
  flex-direction: column;
  gap:20px;
  padding-top:20px;

  .title{
    font-weight:bold;
  }

  .submitButton{
    background-color: #FDE72E;
    border: none; 
    padding:12px;
    font-size:1em;
    font-weight:bold;
    margin-top: auto;
  }

  .submitButton:disabled{
    background-color: #C7C7C7;
  }

  .input-container {
    position: relative;
  }

  .find-password{
    font-size:0.9em;
    text-decoration: underline;  
    margin-top:10px;
  }

  input{
    width: 100%;
    background-color: #f0f0f0;
    border: none; 
    border-radius: 4px; 
    padding:12px;
    padding-right: 30px;
    box-sizing: border-box;
  }    

  .clearButton {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
  }  
`;

export default ConfirmPassword;
