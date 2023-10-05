import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { joinedRoomsAtom, myChatListAtom, roomsAtom } from '@/states/rommsAtom';
import TogetherDelivery from '@/components/Delivery/TogetherDelivery';
import OrderList from '@/components/Delivery/OrderList';
import FoodItem from '@/components/Delivery/FoodItem';
import ChatItem from '@/components/Delivery/ChatItem';


interface IMenuContentProps {
  selectedMenu: string;
  selectedCategory: string;
  handleCategoryClick: (_category: string) => void;
}

const MenuContent = ({
  selectedMenu,
  selectedCategory,
  handleCategoryClick,
}: IMenuContentProps) => {
  const rooms = useRecoilValue(roomsAtom);
  const joinedRooms = useRecoilValue(joinedRoomsAtom);
  const myChatList = useRecoilValue(myChatListAtom);

  const filteredRooms = useMemo(() => rooms.filter(room => room.tag === selectedCategory), [rooms, selectedCategory]);

  if (selectedMenu === '함께배달') {
    return (
      <div>
        {/* 마감 리스트 */}
        <TogetherDelivery />
        {/* 카테고리 버튼 */}
        <OrderList
          selectedCategory={selectedCategory}
          handleCategoryClick={handleCategoryClick}
        />
        {/* 카테고리별 리스트 */}
        {filteredRooms.length > 0 ? (
          filteredRooms.map(room => (
            <FoodItem
              key={room.roomId}
              room={room}
            />
          ))
        ) : (
          <StyledNoData>
            함께 주문 리스트가 비었습니다.
          </StyledNoData>
        )}
      </div>
    );
  } else if (selectedMenu === '내가 참여한 배달') {
    return (
      <StyledContainer>
        {joinedRooms.length > 0 ?
          (
            <ul>
              {
                joinedRooms.map(room => (
                  <FoodItem
                    key={room.roomId}
                    room={room}
                  />
                ))
              }
            </ul>
          ) :
          (
            <StyledEmptyBox>
              <h6>참여한 배달이 없습니다</h6>
              <p>같은 오피스 사람들과 맛있는 한 끼를 주문해보세요!</p>
            </StyledEmptyBox>
          )
        }
      </StyledContainer>
    );
  } else if (selectedMenu === '나의 채팅') {
    return (
      <StyledContainer>
        {myChatList.length > 0 ?
          (
            <ul>
              {
                myChatList.map(chat => (
                  <ChatItem
                    key={chat.chatRoomId}
                    chatItem={chat}
                  />
                ))
              }
            </ul>
          ) :
          (
            <StyledEmptyBox>
              <h6>채팅 메시지가 없습니다</h6>
              <p>같은 오피스 사람들과 맛있는 한 끼를 주문해보세요!</p>
            </StyledEmptyBox>
          )
        }
      </StyledContainer>
    );
  }
  return null;
};

const StyledNoData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16px;
  border-radius: 10px;
  border: 1px dashed ${props => props.theme.colors.grayColor3};
  color: ${props => props.theme.colors.grayColor5};
  height: 405px;
  margin: 20px 24px;
`;

const StyledContainer = styled.div`
  ul {
    display: flex;
    flex-direction: column;
  }
`;

const StyledEmptyBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 160px;

  h6 {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 14px;
    color: ${({ theme }) => theme.colors.black};
  }
  
  p {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.grayColor5};
  }
`;

export default MenuContent;
