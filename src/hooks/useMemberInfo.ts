import { useRecoilValue } from 'recoil';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';

export const useMemberInfo = () => {
  const messageData = useRecoilValue(chatInfoAtom);

  const getMyId = () => {
    const getMyData = messageData.members.find(member => member.amI);
    return getMyData ? getMyData.id : 0;
  };

  const getName = (senderId: number) => {
    const getMemberData = messageData.members.find(member => member.id === senderId);
    return getMemberData ? getMemberData.name : 'Unknown';
  };

  const getCompany = (senderId: number) => {
    const getMemberData = messageData.members.find(member => member.id === senderId);
    return getMemberData ? getMemberData.companyName : false;
  };

  const isSenderMe = (senderId: number) => {
    const getMemberData = messageData.members.find(member => member.id === senderId);
    return getMemberData ? getMemberData.amI : false;
  };

  const isRemitted = (senderId: number) => {
    const getMemberData = messageData.members.find(member => member.id === senderId);
    return getMemberData ? getMemberData.hasRemitted : false;
  };

  const isReceived = (senderId: number) => {
    const getMemberData = messageData.members.find(member => member.id === senderId);
    return getMemberData ? getMemberData.hasReceived : false;
  };

  const isHost = (senderId: number) => {
    const getMemberData = messageData.members.find(member => member.id === senderId);
    return getMemberData ? getMemberData.isHost : false;
  };

  return {
    getMyId,
    getName,
    getCompany,
    isSenderMe,
    isRemitted,
    isReceived,
    isHost,
  };
};
