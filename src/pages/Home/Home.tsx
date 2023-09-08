import { styled } from "styled-components";

import Header from "@/components/Common/Header";
import Button from "@/components/Common/Button";
import OutlineButton from "@/components/Common/OutlineButton";
import { useModal } from "@/hooks/useModal";
import MODAL_DATAS from "@/constants/modalDatas";

const Home = () => {
  // 전역 모달 CustomHooks
  const { openModal } = useModal();

  const handleModalOpen = () => {
    // 페이지에 띄운 모달정보를 openModal함수의 파라미터로 전달
    openModal({
      ...MODAL_DATAS.testModal,
      positiveCallback: () => {
        console.log("모달 나가기 클릭 콜백");
      }
    });
  };

  return (
    <>
      <Header title="Home" />
      <StyledContainer>
        <Button title="CTA 버튼" onClick={() => { console.log("click test"); }} />
        <Button size="small" title="CTA 버튼 Small" onClick={() => { console.log("click test"); }} />
        <Button type="primary" title="Primary 버튼" onClick={() => { console.log("click test"); }} />
        <Button title="비활성화 버튼" disabled onClick={() => { console.log("click test"); }} />
        <Button title="모달 테스트" width="50%" onClick={handleModalOpen} />
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