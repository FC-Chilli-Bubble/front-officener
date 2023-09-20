import React from 'react';
import styled from 'styled-components';

const DeleteModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  // console.log(onClose);
  return (
    <StyledModalOverlay>
      <StyledModalContainer>
        <h1>게시글을 정말 삭제하시겠습니까?</h1>
        <p>게시글을 삭제하면 게스트와 소통이 불편해질 수 있어요</p>
        <DeleteButton onClick={onClose}>삭제</DeleteButton>
        <CancelButton onClick={onClose}>취소</CancelButton>
      </StyledModalContainer>
    </StyledModalOverlay>
  );
};

// 모달 스타일
const StyledModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const StyledModalContainer = styled.div`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 300px;
  text-align: center;

  h1 {
    font-size: 16px;
    font-weight: 500;
    margin: 0;
    padding: 10px 0;
  }

  p {
    font-size: 12px;
    font-weight: 500;
    margin: 10px 0;
    color: ${props => props.theme.colors.grayColor10};
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    width: 40%;
    border: 1px solid ${props => props.theme.colors.marinblueColor};
    cursor: pointer;
    font-size: 16px;
  }
`;

const DeleteButton = styled.button`
  background-color: ${props => props.theme.colors.marinblueColor};
  color: ${props => props.theme.colors.white};
`;

const CancelButton = styled.button`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.marinblueColor};
`;

export default DeleteModal;
