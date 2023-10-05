import { useRecoilValue } from 'recoil';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';

export const useMemberInfo = () => {
  const messageData = useRecoilValue(chatInfoAtom);

  console.log(messageData);
  console.log(messageData.members);
  console.log(messageData.messages);

  const getMemberDataById = (senderId: number) => {
    if (messageData) {
      return messageData.members.find(member => member.id === senderId);
    } else {
      return null;
    }
  };

  const getMyId = () => {
    const getMyData = messageData && messageData.members.find(member => member.amI);
    return getMyData ? getMyData.id : 0;
  };

  const getName = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    console.log('이름', memberData);
    return memberData ? memberData.name : 'Unknown';
  };

  const getCompany = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    console.log('상대방', memberData);
    return memberData ? memberData.companyName : null;
  };

  const isSenderMe = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    return memberData ? memberData.amI : false;
  };

  const isRemitted = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    return memberData ? memberData.hasRemitted : false;
  };

  const isReceived = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    return memberData ? memberData.hasReceived : false;
  };

  const isAllReceived = () => {
    if (messageData) {
      const receivedCount = messageData.members.filter(member => member.hasReceived).length;
      return receivedCount === messageData.members.length;
    }
    return false;
  };

  const isHost = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    console.log('나자신', memberData);
    return memberData ? memberData.isHost : false;
  };

  return {
    getMyId,
    getName,
    getCompany,
    isSenderMe,
    isRemitted,
    isReceived,
    isAllReceived,
    isHost
  };
};
