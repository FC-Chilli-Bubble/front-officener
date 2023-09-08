import { styled } from 'styled-components';
// import { INPUT_SEARCH_ICON } from '@/constants/commonUiData';
import IconSearch from '@/assets/ico_search.svg';

// type ErrorIconType = 'error' | 'none';

type TheInputProps = {
  label?: string;
  placeholder: string;
};

const SearchInput = ({ label, placeholder }: TheInputProps) => {
  return (
    <InputLayout>
      <InputLabel htmlFor="input-box">{label}</InputLabel>
      <InputContainer>
        <InputBox
          type="text"
          placeholder={placeholder}
          id="input-box"></InputBox>
        <SearchImage
          src={IconSearch}
          alt=""
        />
      </InputContainer>
    </InputLayout>
  );
};

const InputLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-weight: 400;
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputBox = styled.input`
  display: flex;
  width: 343px;
  height: 48px;
  padding: 13px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grayColor1};
  &::placeholder {
    color: ${({ theme }) => theme.colors.grayColor4};
    text-indent: 20px;
  }
`;


const SearchImage = styled.img`
  position: absolute;
  color: ${({ theme }) => theme.colors.grayColor4};
  left: 17px;
  bottom: 13px;
  text-align: right;
  cursor: pointer;
`;

export default SearchInput;
