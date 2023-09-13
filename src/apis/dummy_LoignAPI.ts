// import axios from 'axios';


// 로그인 요청 데이터 타입
// interface ILogInRequest {
//   email: string; // 사용자 아이디 (필수!)
//   password: string; // 사용자 비밀번호 (필수!)
// }
// // 로그인 응답 데이터 타입
// interface ILogInResponse {
//   success: boolean; // 로그인 성공 여부
//   token?: string; // 인증 토큰 (옵션)
//   message: string; // 로그인 결과 메시지
// }


// const data = [
//   {
//     email: 'test@naver.com',
//     password: '!test1234'
//   },
//   {
//     email: 'test@naver.com',
//     password: '!test1234'
//   }
// ];

// const LoignAPI = async (query: ILogInRequest): Promise<ILogInResponse> => {
//   const api = 'https://bubble.com/api/login';
//   const response = await api({
//     method: 'POST',
//     url: '/api/auth/login',
//     data: query
//   });
//   const accessToken = response.data.accessToken;
//   localStorage.setItem('token', accessToken);
//   return response.data;
// };


export default LoignAPI;
