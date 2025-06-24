import styled from 'styled-components';

interface ChatWrapperProps {
    isUser: boolean;
}

const ChatWrapper = styled.div<ChatWrapperProps>`
  display: flex;
  justify-content: ${props => (props.isUser ? 'flex-end' : 'flex-start')};
  margin: 10px 0;
  padding: 15px;
`;

const AiChat = styled.div`
    background-color: white;
    max-width: 90%;
`;

const UserChat = styled.div`
    background-color: #ecf0f1;
    padding: 0 15px;
    border-radius: 20px;
    max-width: 90%;
`;

export { ChatWrapper, AiChat, UserChat };