import React from 'react';
import styled from "styled-components";


//인터페이스를 이용해서 props를 typescript에게 설명해준다.
interface ContainerProps{
    bgColor:String;
}
//styled 컴포넌트 생성하기
const Container = styled.div<ContainerProps>``;


//인터페이스를 이용해서 props를 typescript에게 설명해준다.
interface CircleProps{
    bgColor:String;
}

//bgColor은 props이다.
//bgColor의 props의 출처(?), 소스는 CircleProps라는 것을 명시해주어야 한다.
function Circle({bgColor}:CircleProps){
    return (<Container bgColor={bgColor}/>);
}

export default Circle;