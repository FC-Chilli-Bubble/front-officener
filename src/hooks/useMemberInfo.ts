import { useRecoilState } from 'recoil';
import { chatInfoAtom } from '@/states/chatRoomdataAtom';

export const useMemberInfo = () => {
  const [messageData, setMessageData] = useRecoilState(chatInfoAtom);

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
      const onlyGuest = messageData.members.filter(member => !member.isHost);
      const receivedCount = onlyGuest.filter(member => member.hasReceived).length;
      return receivedCount === messageData.members.length - 1;
    }
    return false;
  };

  const isHost = (senderId: number) => {
    const memberData = getMemberDataById(senderId);
    return memberData ? memberData.isHost : false;
  };

  const updateMemberData = (senderId: number) => {
    const oldData = getMemberDataById(senderId);
    if (oldData) {
      const newData = { ...oldData, isRemitted: true };
      setMessageData({
        messages: messageData.messages,
        members: [...messageData.members.filter(member => member.id !== senderId), newData]
      });
    }
  };

  return {
    getMyId,
    getName,
    getCompany,
    isSenderMe,
    isRemitted,
    isReceived,
    isAllReceived,
    isHost,
    updateMemberData
  };
};
