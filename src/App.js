import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const rotateAnimation = keyframes`
  0% {
    transform:rotate(0deg);
    border-radius:0px;
  }
  50% {
    transform:rotate(360deg);
    border-radius:100px;
  }

  100%{
    transform:rotate(0deg);
    border-radius:0px;
  }
`;

const Emoji = styled.span`
  font-size: 30px;
  transition: all ease-in 0.2s;
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Emoji} {
    &:hover {
      font-size: 45px;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <Emoji>😚</Emoji>
      </Box>
      <Emoji>😚</Emoji>
    </Wrapper>
  );
}

export default App;
