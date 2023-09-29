import { styled } from 'styled-components';

import IconSearch from '@/assets/ico_search.svg';
import errorIcon from '@/assets/ico_gray_error.svg';

type TInputProps = {
  label?: string;
  placeholder: string;
  isMessage?: boolean;
  onClick: () => void;
};

const SearchButton = ({ label, placeholder, isMessage = false, onClick }: TInputProps) => {
  return (
    <StyledLayout>
      <StyledLabel>{label}</StyledLabel>
      <StyledContainer>
        <StyledBox onClick={onClick}>{placeholder}</StyledBox>
        <SearchImage
          src={IconSearch}
          alt=""
        />
      </StyledContainer>
      {isMessage && (
        <StyledMessage>
          <StyledImage
            src={errorIcon}
            alt="Valid"
          />
          입주사 목록에 내 회사가 없다면 관리센터로 문의 주세요!
        </StyledMessage>
      )}
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  margin-top: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledBox = styled.button`
  display: flex;
  width: 100%;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.grayColor1};
  color: ${({ theme }) => theme.colors.grayColor4};
  text-indent: 20px;
  &:focus {
    background-color: ${({ theme }) => theme.colors.grayColor1};
  }
`;

const SearchImage = styled.img`
  position: absolute;
  color: ${({ theme }) => theme.colors.grayColor5};
  left: 17px;
  bottom: 13px;
  text-align: right;
  cursor: pointer;
`;
const StyledMessage = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.grayColor5};
  font-size: 10px;
  font-style: normal;
  line-height: 15px; /* 150% */
`;
const StyledImage = styled.img`
  margin: 0 5px;
`;
export default SearchButton;
