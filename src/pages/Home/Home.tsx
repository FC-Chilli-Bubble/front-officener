import { styled } from "styled-components";

import Header from "@/components/Common/Header";
import Button from "@/components/Common/Button";
import OutlineButton from "@/components/Common/OutlineButton";
import Modal from "@/components/Common/Modal";
import { IModal } from "@/types/IModal";

const Home = () => {
  const testModalData: IModal = {
    title: "채팅방을 나가시겠습니까?",
    content: "",
    positive: "나가기",
    positiveCallback: () => {
      console.log("나가기 클릭");
    },
    negative: "닫기",
    negativeCallback: () => {
      console.log("닫기 클릭");
    },
  };

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
        <Modal data={testModalData} />
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