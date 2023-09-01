### 명명 규칙

- 컴포넌트의 경우 파스칼 표기법, 변수와 함수의 경우 카멜 표기법을 사용한다.
    
    ```jsx
    // 컴포넌트
    const HeaderComponent = () => {};
    
    // 변수
    const name = '은비';
    
    // 함수
    const getName = () => {};
    ```
    
- 상수는 영어 대문자, 스네이크 표기법을 사용한다.
    
    ```jsx
    // constants
    
    const BASE_URL = "https://~~~";
    ```
    

### 블록 구문

- 한 줄짜리 블록일 경우라도 {}를 생략하지 않는다.
    
    ```jsx
    if (true) {
    	return
    }
    ```
    
- early return 사용하기
    - 조건식이 충족하면 return을 사용해서 종료시키기
    
    ```jsx
    // Bad
    if (isLoading) {
    	// code....
    } else {
    	// code....
    }
    
    // Good
    if (isLoading) {
    	// code....
    	return
    } 
    
    // code...
    ```
    

### 함수

- 함수는 함수 표현식을 사용하고, 화살표 함수를 사용한다.
    
    ```jsx
    // Bad
    function fnName() {};
    [1,2,3].map(function(x){
        retrun {};
    })
    
    // Good
    const fnName = () => {};
    [1,2,3].map(x => x);
    
    // bad
    const foo = () => { return "bar"; }
    
    // good
    const foo = () => "bar";
    ```
    
- 이벤트 핸들러의 경우 handle + 이벤트를 붙이기
    
    ```jsx
    <button onClick={handleSaveClick}>Save</button>
    ```
    
- API 요청 함수
    
    ```jsx
    // get
    const fetchUsers = () => {}
    
    // post
    const createUser = () => {}
    
    // 수정
    const updateUser = () => {}
    
    // 삭제 1개
    const deleteUser = () => {}
    
    // 전체 삭제
    const removeUsers = () => {}
    ```
    

### 폴더 네이밍

- 카멜 케이스를 기본으로 하고, 컴포넌트 폴더인 경우 파스칼 케이스로 사용한다.
    - 마찬가지로 pages 폴더에 들어가는 컴포넌트도 파스칼 케이스로!
    
    ```jsx
    📦src
    ┣ 📂apis
    ┃ ┣ 📂login
    ┃ ┗ 📂delivery
    ┃
    ┣ 📂components
    ┃ ┣ 📂Login
    ┃ ┃ ┗ 📜LoginForm.ts
    ┃ ┣ 📂Delivery
    ┃ ┃ ┗ 📜index.ts
    ┃ ┗ 📂Common
    ┃   ┗ 📜index.ts
    ┃ 
    ┣ 📂constants
    ┃ ┗ 📜index.ts
    ┣ 📂hooks
    ┃ ┗ 📜index.ts
    ┣ 📂pages
    ┃ ┗ 📂Login
    ┃   ┗ 📜Login.ts
    ```
    

### 파일 네이밍

- customHook을 사용하는 경우 : use+함수명으로 작성해서 사용한다.

### Import 구조

- 서드파티 import를 먼저 → 내부 파일 import를 마지막으로
    
    ```jsx
    // 서드파티 import
    import React from 'react'
    import dayjs from 'dayjs'
    
    // 내부 import
    import Button from '@/components/Button'
    ```
    

### component props

- 컴포넌트의 props는 컴포넌트 파일 내부에서 type을 지정한다.
    
    ```jsx
    type THeaderProps = {
    	title: string;
    };
    
    export const Header = ( { title } : THeaderProps) {
    	...
    };
    ```
    
- props의 type이 단순 string인 경우 {}는 생략한다.
    
    ```jsx
    // bad
    <Header title={"오피스너"} />
    
    // good
    <Header title="오피스너" />
    ```
    

### Interface / Type

- interface와 type 별칭에는 `파스칼` 케이스로 작성한다.
    - 여러 파일에서 `재사용`하는 interface, type은 types 폴더 내부에 작성해서 필요한 곳에서 import해서 사용한다.
    - 컴포넌트나 함수 등 내부에서 한번만 사용되는 케이스는 해당 파일에서 정의해서 사용한다.
    
    ```jsx
    // interface : 약자 I를 앞에 붙인다
    interface IUser {}
    
    // type : 약자 T를 앞에 붙인다
    type TUserProps {}
    ```
    

### Styled-components

- 태그명 작성 규칙 ⇒ `Styled` + 파스칼 케이스
    
    ```jsx
    const StyledHeader = styled.header``
    
    const StyledEmailInput = styled.input``
    ```
    
- 감싸는 태그 `Layout` > `Container` > `Box` 순으로 작성해보기
    
    ```jsx
    const StyledLayout
    
    const StyledContainer
    
    const StyledBox
    
    // ex
    <StyledLayout>
    	<StyledContainer>
    		<h1></h1>
    		<StyledBox>
    			<ul></ul>
    		</StyledBox>
    	</StyledContainer>
    </StyledLayout>
    ```
    
- Button 같은 것들 약어로 사용하지 않고 풀네임으로 사용하기
    
    ```jsx
    StyledButton (o)
    StyledBtn (x)
    ```
    

### 절대 경로 사용

- 경로 별칭 @ alias 붙여서 사용하기

  ```jsx
    import Header from '@/components/Common/Header
  ```