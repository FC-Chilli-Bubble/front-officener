import { styled } from 'styled-components';

import SelectedInput from '@/components/Common/SelectedInput';
import SearchInput from '@/components/Common/SearchInput';
import FormField from '@/components/Common/FormField';

const Login = () => {
  return (
    <StyledContainer>
      <br />
      <h1>테스트 페이지</h1>
      <p>인풋요소 : components/Common/ </p>
      <br />
      <h3>SelectedInput.tsx</h3>
      <br />
      <SelectedInput
        label={'건물'}
        placeholder={'미왕빌딩'}
        onClick={() => {
          console.log('컴포넌트 변경각');
        }}
      />
      <br />
      <br />
      <SelectedInput
        label={'회사'}
        placeholder={'재직 중인 회사'}
        errorIcon="error"
        onClick={() => {
          console.log('컴포넌트 변경각');
        }}
      />
      <br />
      <br />
      <h3>SearchInput.tsx</h3>
      <SearchInput
        label={'건물'}
        placeholder={'나의 오피스 찾기'}
      />
      <br />
      <br />
      <h3>FormField.tsx</h3>
      <div>
        {' '}
        속성 선택 : <br />
        라벨, placeholder 내용, 에러(아이콘)표시, 에러 메세지 내용, 필수입력란 *표시, 체크아이콘{' '}
      </div>
      <div>오후 7시 이후 push || 수정사항 : 포커스시 블루, 에러 발생시 레드로 보더색상 변경</div>
      <FormField
        label={'아이디'}
        placeholder={'에러시 박스 레드색상 처리하는 방법 고민중.'}
        redErrorIcon="error"
        errorMessage={'아이디를 입력해 주세요.'}
      />
      <br />
      <br />
      <FormField
        label={'가게이름'}
        isRequired //필수 입력란 일때의 작성.
        placeholder={'필수 입력란-기본'}
      />
      <br />
      <FormField
        label={'가게이름'}
        isRequired //필수 입력란 일때의 작성.
        placeholder={'필수 입력란-양식통과'}
        checkIcon="check"
      />
      <br />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 0 16px;
  // test
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export default Login;
