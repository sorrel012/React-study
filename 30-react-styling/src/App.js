import styled, { keyframes } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
`;

const rotationAnimation = keyframes`
  0% {
    transform: rotate(0);
    border-radius: 0;
  }
  50% {
    transform: rotate(360deg);
    border-radius: 100px;
  }
  100% {
    transform: rotate(0);
    border-radius: 0;
  }
`;

const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotationAnimation} 1s linear infinite;
  span {
    font-size: xx-large;
    &:hover {
      font-size: xxx-large;
      cursor: pointer;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>😀</span>
      </Box>
    </Wrapper>
  );
}

export default App;
