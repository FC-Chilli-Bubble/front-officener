import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regexp';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import FormField from '@/components/Common/FormField';

type ErrorRedIconType = 'wrong' | 'error' | 'none';

const Login = () => {
  const navigate = useNavigate();
  // 유효성 검사
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  //오류메시지 상태저장
  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [emailErrorIcon, setEmailErrorIcon] = useState<ErrorRedIconType>('none');
  const [pwsErrorIcon, setPwsErrorIcon] = useState<ErrorRedIconType>('none');

  const handleServiceClick = (title: string) => {
    if (title === '로그인') {
      navigate('/');
      return;
    }
  };
  const handleNavigate = () => {
    navigate('/intro/register');
    return;
  };

  // 이메일 입력 유효성 검사
  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    if (!newEmail) {
      setEmailErrorIcon('wrong');
      setEmailMsg('이메일을 입력해 주세요');
      return;
    } else if (!EMAIL_REGEX.test(newEmail)) {
      setEmailErrorIcon('error');
      setEmailMsg('정확한 이메일 형식을 입력해 주세요.');
      return;
    } else {
      setEmailMsg('');
      setEmailErrorIcon('none');
    }
  };
  // 비밀번호 입력 유효성 검사
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (!newPassword) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호를 입력해 주세요');
      return;
    } else if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('error');
      setPwdMsg('8~16자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요');
      return;
    } else {
      setPwdMsg('');
      setPwsErrorIcon('none');
    }
  };

  // 이메일과 비밀번호 업데이트 감지
  useEffect(() => {
    updateLoginButtonState(email, password);
  }, [email, password]);

  const updateLoginButtonState = (newEmail: string, newPassword: string) => {
    if (newEmail && newPassword && !emailMsg && !pwdMsg) {
      setIsValid(true);
      console.log('유효성 검사 통과');
      return;
    } else {
      setIsValid(false);
      console.log('안녕');
    }
  };

  // 로그인 로직
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValid) {
      // 유효성 검사가 통과되면 로그인 로직 수행
      try {
        // 여기에 실제 로그인 로직을 구현하세요.
        // 서버로 이메일과 비밀번호를 전송하고 인증을 수행합니다.
        // 예를 들어, Axios 또는 fetch를 사용하여 API 호출을 수행할 수 있습니다.
        // 로그인에 성공하면 다음 페이지로 이동하거나, 성공 메시지를 표시하거나 필요한 작업을 수행합니다.
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    }
  };

  return (
    <>
      <Header
        title="로그인"
        leftIcon="back"
      />
      <StyledLayout>
        <StyledContainer onSubmit={handleLoginSubmit}>
          <StyledInput>
            <FormField
              isType="email"
              label="아이디"
              value={email}
              placeholder="이메일을 입력해 주세요."
              onChange={handleEmailChange}
              errorMessage={emailMsg}
              redErrorIcon={emailErrorIcon}
            />
          </StyledInput>
          <StyledInput>
            <FormField
              isType="password"
              label="비밀번호"
              value={password}
              placeholder="비밀번호를 입력해 주세요."
              onChange={handlePasswordChange}
              errorMessage={pwdMsg}
              redErrorIcon={pwsErrorIcon}
            />
          </StyledInput>
          <StyledButton>
            <Button
              title="로그인"
              disabled={!isValid}
              onClick={() => {
                handleServiceClick;
              }}
            />
            <StyledFindAccount>
              <a>아이디찾기</a>
              <a>비밀번호찾기</a>
            </StyledFindAccount>
          </StyledButton>
        </StyledContainer>
        <StyledSignupContainer>
          오피스너 계정이 없으신가요?
          <StyledSignupBox onClick={handleNavigate}>회원가입</StyledSignupBox>
        </StyledSignupContainer>
      </StyledLayout>
    </>
  );
};

const StyledLayout = styled.div`
  padding: 0 16px;
  position: relative;
  top: 18px;
  height: 83vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

const StyledContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 350px;
`;
const StyledInput = styled.div`
  height: 98px;
`;

const StyledButton = styled.div`
  display: flex;
  margin: 10px 0;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledFindAccount = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayColor5};
  & > a {
    margin-top: 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayColor5};
    cursor: pointer;
    &::after {
      content: '';
      width: 1px;
      height: 16px;
      background-color: ${({ theme }) => theme.colors.grayColor5};
      position: absolute;
      left: 50%;
    }
  }
`;
const StyledSignupContainer = styled.p`
  display: flex;
  justify-content: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.grayColor6};
`;
const StyledSignupBox = styled.a`
  color: ${({ theme }) => theme.colors.ctaColor};
  padding-left: 5px;
  cursor: pointer;
`;

export default Login;
