import SelectedInput from '@/components/Common/SelectedInput';
import SearchInput from '@/components/Common/SearchInput';
import FormField from '@/components/Common/FormField';

const Login = () => {
  return (
    <div>
      <br />
      <p>인풋요소 : components/Common/ </p>
      <br />
      <h3>SelectedInput.tsx</h3>
      <br />
      <SelectedInput
        label={'건물'}
        placeholder={'미왕빌딩'}
      />
      <br />
      <br />
      <SelectedInput
        label={'회사'}
        placeholder={'재직 중인 회사'}
        errorIcon="error"
      />
      <br />
      <br />
      <h3>SearchInput.tsx</h3>
      <br />
      <SearchInput
        label={'건물'}
        placeholder={'나의 오피스 찾기'}
      />
      <br />
      <br />
      <h3>FormField.tsx</h3>
      <br />
      <FormField
        label={'아이디'}
        placeholder={'텍스트 입력란'}
        redErrorIcon="error"
        errorMessage={'아이디를 입력해 주세요.'}
      />
      <br />
      <br />
      <FormField
        label={'가게이름'}
        isRequired
        placeholder={'필수 입력란'}
      />
    </div>
  );
};

export default Login;
