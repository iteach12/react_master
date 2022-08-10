import styled from 'styled-components';

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${(props) => props.bgColor};
  width: 100px;
  height: 100px;
`;

const Text = styled.h1`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box bgColor="teal">
        <Text>HEllo</Text>
      </Box>
      <Box bgColor="tomato"></Box>
    </Father>
  );
}

export default App;
