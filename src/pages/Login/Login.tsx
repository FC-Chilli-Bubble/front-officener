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
      <SelectedInput
        label={'건물'}
        placeholder={'미왕빌딩'}
        onClick={() => {
          console.log('컴포넌트 변경각');
        }}
      />

      <SelectedInput
        label={'회사'}
        placeholder={'재직 중인 회사'}
        errorIcon="error"
        onClick={() => {
          console.log('컴포넌트 변경각');
        }}
      />

      <h3>SearchInput.tsx</h3>
      <SearchInput
        label={'건물'}
        placeholder={'나의 오피스 찾기'}
      />
      <br />
      <h3>FormField.tsx</h3>
      <div>
        1. [isType]을 속성으로 넣어뒀지만 제대로 걸러지지 않아서 정규표현식으로 유효성 검사 철저히
        해야함.
        <br />
        2. 속성 선택 : <br />
        3. 라벨 | placeholder 내용 | 에러(아이콘)표시 | 에러 메세지 내용 | 필수입력란 [*]표시 |
        체크아이콘
      </div>
      <div>
        오후 8시 push | 수정사항 : 포커스 시 블루, 에러 시 레드로 보더색상 변경 && isType옵션 추가
      </div>
      <FormField
        isType="email"
        label={'아이디'}
        placeholder={'에러 메세지 노출과 인풋박스 테두리 색상 연동'}
        redErrorIcon="error"
        errorMessage={'아이디를 입력해 주세요.'}
      />
      <FormField
        isType="text"
        label={'가게이름'}
        isRequired // * 표시 여부
        placeholder={'필수 입력란-기본'}
      />
      <FormField
        isType="url"
        label={'메뉴판 링크'}
        isRequired // * 표시 여부
        placeholder={'메뉴판은 url만 입력되게끔'}
        checkIcon="check"
      />
      <FormField
        isType="number"
        label={'배달비'}
        isRequired // * 표시 여부
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
