import styled from 'styled-components';

const MissingCard = () => {
  return (
    <StyledContainer>
      <div className="NoChoice">
        <p>
          엘리베이터를 <br />
          등록해주세요
        </p>
      </div>
    </StyledContainer>
  );
};

export default MissingCard;

const StyledContainer = styled.div`
  border: 1px dashed ${({ theme }) => theme.colors.grayColor3};
  border-radius: 20px;
  .NoChoice {
    display: flex;
    justify-content: center;
    margin-top: 80px;
  }
  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grayColor4};
  }
`;
