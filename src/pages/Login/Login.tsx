import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { useCookies } from 'react-cookie';
import { userInfoAtom } from '@/states/userDataAtom';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/constants/regexp';
import { createLogin } from '@/apis/Login/LoginRequests';

import Header from '@/components/Common/Header';
import Button from '@/components/Common/Button';
import FormField from '@/components/Common/FormField';
import { IErrorResponse } from '@/types/Common/IErrorResponse';

type TErrorRedIconType = 'wrong' | 'error' | 'none';

const Login = () => {
  const navigate = useNavigate();
  // 유효성 검사
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState<boolean>(false);
  // 오류 메시지 상태
  const [emailMsg, setEmailMsg] = useState('');
  const [pwdMsg, setPwdMsg] = useState('');
  const [emailErrorIcon, setEmailErrorIcon] = useState<TErrorRedIconType>('none');
  const [pwsErrorIcon, setPwsErrorIcon] = useState<TErrorRedIconType>('none');

  const [, setCookie] = useCookies(['token']);
  const setUser = useSetRecoilState(userInfoAtom);

  // 헤더 뒤로가기 버튼
  const handleServiceClick = () => {
    navigate('/');
    return;
  };
  // 회원가입 페이지 이동 버튼
  const handleNavigate = () => {
    navigate('/intro/signup');
    return;
  };

  // 이메일 입력 유효성 검사
  const handleEmailChange = (newEmail: string) => {
    setEmail(newEmail);
    if (!newEmail) {
      setEmailErrorIcon('none');
      setEmailMsg('');
      setIsValid(false);
      return;
    } else if (!EMAIL_REGEX.test(newEmail)) {
      setEmailErrorIcon('none');
      setEmailMsg('');
      setIsValid(false);
      return;
    } else {
      setEmailErrorIcon('none');
      setEmailMsg('');
      updateLoginButtonState(newEmail, password);
    }
  };

  // 비밀번호 입력 유효성 검사
  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
    if (!newPassword) {
      setPwsErrorIcon('none');
      setPwdMsg('');
      setIsValid(false);
      return;
    }
    if (!PASSWORD_REGEX.test(newPassword)) {
      setPwsErrorIcon('none');
      setPwdMsg('');
      setIsValid(false);
      return;
    } else {
      setPwsErrorIcon('none');
      setPwdMsg('');
      updateLoginButtonState(email, newPassword);
    }
  };

  // 이메일 입력 필드에서 포커스 아웃 시 에러메세지 출력
  const handleEmailBlur = (newEmail: string) => {
    setEmail(newEmail);
    if (!email) {
      setEmailErrorIcon('error');
      setEmailMsg('이메일을 입력해 주세요');
    }
    if (!EMAIL_REGEX.test(email)) {
      setEmailErrorIcon('error');
      setEmailMsg('정확한 이메일 형식을 입력해 주세요.');
    } else {
      setEmailMsg('');
      setEmailErrorIcon('none');
    }
  };

  // 비밀번호 입력 필드에서 포커스 아웃 시 에러메세지 출력
  const handlePasswordBlur = (newPassword: string) => {
    setPassword(newPassword);
    if (!password) {
      setPwsErrorIcon('error');
      setPwdMsg('비밀번호를 입력해 주세요');
    } else if (!PASSWORD_REGEX.test(password)) {
      setPwsErrorIcon('error');
      setPwdMsg('8~16자의 영문, 숫자, 특수문자를 모두 포함한 비밀번호를 입력해주세요');
    } else {
      setPwsErrorIcon('none');
      setPwdMsg('');
    }
  };

  // 버튼 활성화 상태 변경
  const updateLoginButtonState = (newEmail: string, newPassword: string) => {
    if (newEmail && newPassword && !emailMsg && !pwdMsg) {
      setIsValid(true);
      return;
    } else {
      setIsValid(false);
    }
  };

  // 로그인 로직
  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isValid) {
      createLogin(email, password).then(
        response => {
          console.log(response);
          const token = response.data.userInfo.token;
          const userInfo = response.data;
          if (token) {
            // setCookie(쿠키 이름, 쿠키에 넣을 값, 옵션)
            setCookie('token', token, { path: '/' });
          }
          setUser(userInfo);
          navigate('/', { replace: true });
        },
        (error: IErrorResponse) => {
          setEmailErrorIcon('wrong');
          setEmailMsg('이메일 또는 비밀번호가 틀렸습니다.');
          console.log(error.errorMessage);
          return;
        }
      );
    }
  };

  // 이메일과 비밀번호 업데이트 감지
  useEffect(() => {
    updateLoginButtonState(email, password);
  }, [email, password]);


  // 로그인 상태면 메인으로~
  // useEffect(() => {
  //   const token = getCookie('token');
  //   if (token) {
  //     navigate('/');
  //   } else {
  //     navigate('/login');
  //   }
  // }, [])



  return (
    <>
      <Header
        title="로그인"
        leftIcon="back"
        leftIconClick={handleServiceClick}
      />
      <StyledLayout>
        <StyledContainer onSubmit={handleLoginSubmit}>
          <StyledInput>
            <FormField
              isType="email"
              label="아이디"
              value={email}
              name="email"
              placeholder="이메일을 입력해 주세요."
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              errorMessage={emailMsg}
              redErrorIcon={emailErrorIcon}
              isRequired
            />
          </StyledInput>
          <StyledInput>
            <FormField
              isType="password"
              label="비밀번호"
              value={password}
              name="password"
              placeholder="비밀번호를 입력해 주세요."
              onChange={handlePasswordChange}
              errorMessage={pwdMsg}
              onBlur={handlePasswordBlur}
              redErrorIcon={pwsErrorIcon}
              isRequired
            />
          </StyledInput>
          <StyledButton>
            <Button
              title="로그인"
              disabled={!isValid}
              onClick={() => {
                handleLoginSubmit;
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
  margin-bottom: 10px;
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
