import styled from 'styled-components';
import {useState} from 'react';
import processText from '../utils/processText';
import Input from './Input';
import Button from './Button';
import { ChatWrapper, AiChat, UserChat } from './ChatComponents';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const Container = styled.div`
    width: 45vw;
    height: 80vh;
    background-color: white;
    border-radius: 20px;
    position: relative;
    margin: 0 auto;
    padding: 10px;
    @media(max-width: 768px){
        width: 90vw;
        margin-bottom: 15px;
    }
`;

const Search = styled.div`
    text-align: center;
    // border: 1px solid red;
    position: absolute;
    width: 100%;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
`;

const ChatArea = styled.div`
    height: 90%;
    overflow: scroll;
    overflow-x: hidden;
    // border: 1px solid red;
`;

function Content(){
    const [value, setValue] = useState<string>('');
    const [messages, setMessages] = useState<string[]>([]);
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value},
        } = event;
        setValue(value);
    }
    const onSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(value){
            setMessages(prev => [...prev, value]);
            const message = await processText(value)
            console.log(message);
            setMessages(prev => [...prev, message]);
            setValue('');
        }
        else{
            alert('질문을 입력하세요.');
        }
    }
    return (
        <Container>
            <ChatArea>
                {messages.map((msg, idx) => {
                    return (
                        <ChatWrapper key={idx} isUser={idx % 2 === 0}>
                            {idx % 2 === 0 ? (
                            <UserChat><ReactMarkdown remarkPlugins={[remarkGfm]}>{msg}</ReactMarkdown></UserChat>
                            ) : (
                            <AiChat><ReactMarkdown remarkPlugins={[remarkGfm]}>{msg}</ReactMarkdown></AiChat>
                            )}
                        </ChatWrapper>
                    )
                })}
            </ChatArea>
            <form onSubmit={onSubmit}>
                <Search>
                    <Input type="text" value={value} onChange={onChange}/>
                    <Button>&uarr;</Button>
                </Search>
            </form>
        </Container>
    );
}

export default Content;