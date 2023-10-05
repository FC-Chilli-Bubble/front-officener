import styled from 'styled-components';

const MissingCard = () => {
  return (
    <StyledContainer>
      <p>
        엘리베이터를 <br />
        등록해주세요
      </p>
    </StyledContainer>
  );
};

export default MissingCard;

const StyledContainer = styled.div`
  width: 100%;
  max-width: 200px;
  border: 1px dashed ${({ theme }) => theme.colors.grayColor3};
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 217px;
  padding: 88px 0;
  line-height: normal;
  

  p {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.grayColor4};
  }
`;
