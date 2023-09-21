import { messageData } from '@/apis/dummy_ChatAPI';

export const getName = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.name;
  } else {
    return 'Unknown';
  }
};

export const getCompany = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.companyName;
  } else {
    return false;
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

export const isReceived = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.hasReceived;
  } else {
    return false;
  }
};

export const isHost = (senderId: number) => {
  const getMemberData = messageData.members.find(member => member.id === senderId);
  if (getMemberData) {
    return getMemberData.isHost;
  } else {
    return false;
  }
};
