//Components 생성 circle

import React from 'react';
import styled from 'styled-components';

//인터페이스를 이용해서 props를 typescript에게 설명해준다.
interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
//인터페이스를 이용해서 props를 typescript에게 설명해준다.
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 4px solid ${(props) => props.borderColor};
`;
//styled 컴포넌트 생성하기

//bgColor은 props이다.
//bgColor의 props의 출처(?), 소스는 CircleProps라는 것을 명시해주어야 한다.
function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}
export default Circle;
