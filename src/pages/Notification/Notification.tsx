import { useNavigate } from 'react-router-dom';

import Header from '@/components/Common/Header';
import styled from 'styled-components';

const Notification = () => {
  const navigate = useNavigate();

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header leftIcon='back' leftIconClick={handleClickBack} title='알림' />
      <StyledContainer>
        <div>
          <StyledNewTitle>
            <h2>새로운 알림</h2>
            <button>모두 읽음</button>
          </StyledNewTitle>
          <StyledEmptyMessage>
            새로운 알림이 없습니다.
          </StyledEmptyMessage>
        </div>

        <div>
          <h2>지난 알림</h2>
        </div>
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 16px;
  }
`;

const StyledNewTitle = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 5px 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background: ${({ theme }) => theme.colors.grayColor1};
    color: ${({ theme }) => theme.colors.grayColor5};
    border: none;
  }
`;

const StyledEmptyMessage = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-top: 8px;
`;

export default Notification;