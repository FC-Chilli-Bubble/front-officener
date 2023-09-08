import { styled } from "styled-components";

import Header from "@/components/Common/Header";
import Button from "@/components/Common/Button";
import OutlineButton from "@/components/Common/OutlineButton";

const Home = () => {

  return (
    <>
      <Header title="Home" />
      <StyledContainer>
        <Button title="CTA 버튼" onClick={() => { console.log("click test"); }} />
        <Button size="small" title="CTA 버튼 Small" onClick={() => { console.log("click test"); }} />
        <Button type="primary" title="Primary 버튼" onClick={() => { console.log("click test"); }} />
        <Button title="비활성화 버튼" disabled onClick={() => { console.log("click test"); }} />
        <Button title="길이 있는 버튼" width="50%" onClick={() => { console.log("click test"); }} />
        <OutlineButton title="테두리 버튼" onClick={() => { console.log("click test"); }} />
      </StyledContainer>
    </>
  );
};

const StyledContainer = styled.div`
  padding: 0 16px;

  // test
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 2000px;
`;

export default Home;