import Button from "@/components/Common/Button";
import { styled } from "styled-components";

const Home = () => {

  return (
    <StyledLayout>
      <Button title="CTA 버튼" onClick={() => { console.log("click test"); }} />
      <Button type="primary" title="Primary 버튼" onClick={() => { console.log("click test"); }} />
      <Button title="비활성화 버튼" disabled onClick={() => { console.log("click test"); }} />
      <Button title="길이 있는 버튼" width="50%" onClick={() => { console.log("click test"); }} />
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  // test
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export default Home;