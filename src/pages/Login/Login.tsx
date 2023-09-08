import { styled } from 'styled-components';

import SelectedInput from '@/components/Common/SelectedInput';
import SearchInput from '@/components/Common/SearchInput';
import FormField from '@/components/Common/FormField';
import Tags from '@/components/Common/Tags';

const Login = () => {
  return (
    <StyledContainer>
      <br />
      <h1>테스트 페이지</h1>
      <p>위치 : components/Common/ </p>
      <p>[함께주문 카테고리 태그]</p>
      <p>Tags.tsx</p>
      <Tags
        title="음식 태그"
        onClick={() => {
          console.log('click test');
        }}
      />
      <Tags
        title="음식 태그"
        unActive
        onClick={() => {
          console.log('click test');
        }}
      />
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
      <br />
      <h3>SearchInput.tsx</h3>
      <SearchInput
        label={'건물'}
        placeholder={'나의 오피스 찾기'}
      />
      <br />
      <h3>FormField.tsx</h3>
      <div>
        1. 혹시 보시고 누락된 설정이 있으면 말씀부탁드립니다!
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
        placeholder={'에러 메세지 노출과 인풋박스 테두리 색상 연동-x아이콘'}
        redErrorIcon="wrong"
        errorMessage={'이메일 또는 비밀번호가 틀렸습니다.'}
      />
      <FormField
        isType="email"
        label={'아이디'}
        placeholder={'에러 메세지 노출과 인풋박스 테두리 색상 연동-!아이콘'}
        redErrorIcon="error"
        errorMessage={'이메일을 입력해 주세요.'}
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
  gap: 10px;
`;

export default Login;
