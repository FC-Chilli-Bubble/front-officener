import { IChatAndMembers } from '@/types/Chatroom/IChatContent';
import { atom } from 'recoil';

export const chatInfoAtom = atom<IChatAndMembers>({
    key: 'chatInfoAtom',
    default: {
        messages: [],
        members: []
    }
  });