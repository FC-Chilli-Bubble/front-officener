import { useRecoilValue } from 'recoil';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';

export const useMemberInfo = () => {
  const messageData = useRecoilValue(chatInfoAtom);

  const dataMember = messageData?.members;
  const dataMessage = messageData?.messages;

  console.log('messageData ?:', messageData);
  console.log('dataMember🧑‍⚖️:', dataMember);
  console.log('dataMessage📨:', dataMessage);

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
    console.log('백호야', memberData);
    return memberData ? memberData.name : 'Unknown';
  };

  const getCompany = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
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
    console.log('코코', memberData);
    return memberData ? memberData.host : false;
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
