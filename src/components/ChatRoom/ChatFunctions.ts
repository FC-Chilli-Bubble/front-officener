import { messageData } from '../../apis/dummy_ChatAPI';

export const getName = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.name;
  } else {
    return 'Unknown';
  }
};

export const isSenderMe = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.amI;
  } else {
    return false;
  }
};

export const isRemitted = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.hasRemitted;
  } else {
    return false;
  }
};
