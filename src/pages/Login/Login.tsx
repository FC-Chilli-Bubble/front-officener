import { styled } from 'styled-components';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import FormField from '@/components/Common/FormField';

const Login = () => {
  return (
    <>
      <Header title="로그인" />
      <LoginLayout>
        <LoginContainer>
          <FormField
            isType="email"
            label={'아이디'}
            placeholder={'이메일을 입력해 주세요.'}
            redErrorIcon="wrong"
            errorMessage={'이메일 또는 비밀번호가 틀렸습니다.'}
          />
          <FormField
            isType="password"
            label={'비밀번호'}
            placeholder={'비밀번호를 입력해 주세요.'}
            redErrorIcon="error"
            errorMessage={'이메일을 입력해 주세요.'}
          />
          <LoginButton>
            <Button
              title="로그인"
              onClick={() => {
                console.log('click test');
              }}
            />
            <FindAccount>
              <a>아이디찾기</a>
              <a>비밀번호찾기</a>
            </FindAccount>
          </LoginButton>
        </LoginContainer>
        <SignupContainer>
          오피스너 계정이 없으신가요? <SignupBox>회원가입</SignupBox>
        </SignupContainer>
      </LoginLayout>
    </>
  );
};

const LoginLayout = styled.div`
  padding: 0 16px;
  position: relative;
  top: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 340px;
  /* background-color: red; */
`;
const LoginButton = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  justify-content: space-between;
`;
const FindAccount = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-around;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayColor5};
`;
const SignupContainer = styled.p`
  position: relative;
  bottom: 5px;
  display: flex;
  height: 50px;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayColor6};
`;
const SignupBox = styled.a`
  color: ${({ theme }) => theme.colors.ctaColor};
  padding-left: 5px;
`;

export default Login;
