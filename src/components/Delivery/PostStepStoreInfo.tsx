/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { useRecoilState } from "recoil";
import styled from "styled-components";


import FormField from "@/components/Common/FormField";
import OutlineButton from "@/components/Common/OutlineButton";
import { postTagAtom } from "@/states/postTagAtom";
import { postAtom } from "@/states/postAtom";

type TPostStepStoreInfoProps = {
  openBottomSheet: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isEdit: boolean;
};


const PostStepStoreInfo = ({ openBottomSheet, isEdit }: TPostStepStoreInfoProps) => {
  const [postData, setPostData] = useRecoilState(postAtom);
  const [savedTag, setSavedTag] = useRecoilState(postTagAtom);

  const postDeliveryTip = useMemo(() => (postData.deliveryFee ? postData.deliveryFee : '').toString(), [postData]);

  const handleClickTagSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    openBottomSheet(e);
  };

  const handleClickSavedTag = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPostData({ ...postData, foodTag: '' });
    setSavedTag('');
    openBottomSheet(e);
  };

  return (
    <>
      <FormField
        disabled={isEdit}
        name='storeName'
        isType="text"
        label='가게이름'
        isRequired
        placeholder='가게이름을 작성해주세요'
        isValid={postData.storeName !== ''}
        value={postData.storeName}
        onChange={(storeName) => setPostData({ ...postData, storeName })}
      />

      <FormField
        disabled={isEdit}
        name='storeLink'
        isType="text"
        label='메뉴판 링크'
        isRequired
        placeholder='가게링크를 복사해주세요'
        isValid={postData.menuLink !== ''}
        value={postData.menuLink}
        onChange={(menuLink) => setPostData({ ...postData, menuLink })}
      />

      <FormField
        name='deliveryTip'
        isType="text"
        label='배달비'
        isRequired
        placeholder='배달비를 작성해주세요'
        isValid={postDeliveryTip !== ''}
        value={postDeliveryTip}
        onChange={(tip) => setPostData({ ...postData, deliveryFee: Number(tip.replace(/[^0-9]/g, '')) })}
      />

      <StyledTagBox>
        <StyledLabel htmlFor="input-box">
          태그
          <span>*</span>
        </StyledLabel>
        {
          savedTag ? <StyledTag disabled={isEdit} onClick={handleClickSavedTag}>{savedTag}</StyledTag> : (<OutlineButton title="태그선택" size="small" width="fit-content" onClick={handleClickTagSelect} />)
        }

      </StyledTagBox>
    </>
  );
};

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.colors.grayColor5};
  line-height: normal;

  span {
    color: ${({ theme }) => theme.colors.redColor0};
    margin-left: 5px;
  }
`;

const StyledTagBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledTag = styled.button`
  outline: none;
  border: 1.2px solid ${({ theme }) => theme.colors.ctaColor};
  border-radius: 8px;
  width: fit-content;
  height: 48px;
  padding: 0 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.ctaColor};
  background-color: ${({ theme }) => theme.colors.primaryHoverColor};
  cursor: pointer;

  &:disabled {
    color:${({ theme }) => theme.colors.grayColor5};
    border-color:${({ theme }) => theme.colors.grayColor3};
    background-color:${({ theme }) => theme.colors.grayColor1};
  }
`;

export default PostStepStoreInfo;