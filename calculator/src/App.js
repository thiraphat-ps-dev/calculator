/* eslint-disable radix */

import React from 'react';
import styled from 'styled-components';

const CalculatorContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: #99aab5;
`;

const ResultContainer = styled.View`
  height: 30%;
  width: 100%;
  background-color: #2c2f33;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 10px;
`;

const OperatorContainer = styled.View`
  width: 100%;
  height: 70%;
  display: flex;
`;

const TextResult = styled.Text`
  color: #ffffff;
  font-size: 50px;
`;

const ButtonOperator = styled.TouchableHighlight`
  align-items: center;
  background-color: ${(props) =>
    props.bgColor === undefined ? 'black' : `${props.bgColor}`};
  border: solid 1px black;
  display: flex;
  justify-content: center;
  width: ${(props) => (props.bWidth === undefined ? '25%' : `${props.bWidth}`)};
`;

const TextOperator = styled.Text`
  color: #ffffff;
  font-weight: 500;
  font-size: 30px;
  padding: 0px;
`;

const RowContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-grow: ${(props) => (props.fGrow === undefined ? '1' : `${props.fGrow}`)};
`;

export default function App() {
  const [] = React.useState(0);
  const [] = React.useState(0);
  const [clear, setClear] = React.useState(false);
  const [sumList, setSumList] = React.useState([]);
  const [count, setCount] = React.useState('');
  const [] = React.useState('');

  return (
    <CalculatorContainer>
      <ResultContainer>
        <TextResult>
          {count || 0}
          {/* {JSON.stringify(sumList)}
          {clear.toString()} */}
        </TextResult>
      </ResultContainer>
      <OperatorContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              setCount('');
              setSumList([]);
              setClear(false);
            }}
            bgColor={'#636363'}>
            <TextOperator>AC</TextOperator>
          </ButtonOperator>
          <ButtonOperator bgColor={'#636363'}>
            <TextOperator
              onPress={() => {
                setCount(count.slice(0, -1));
              }}>
              DEL
            </TextOperator>
          </ButtonOperator>
          <ButtonOperator bgColor={'#636363'}>
            <TextOperator>%</TextOperator>
          </ButtonOperator>
          <ButtonOperator bgColor={'#FA9F00'}>
            <TextOperator>÷</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('7'), setClear(false))
                : setCount((prevCount) => prevCount + '7');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>7</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('8'), setClear(false))
                : setCount((prevCount) => prevCount + '8');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>8</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('9'), setClear(false))
                : setCount((prevCount) => prevCount + '9');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>9</TextOperator>
          </ButtonOperator>
          <ButtonOperator bgColor={'#FA9F00'}>
            <TextOperator>x</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('4'), setClear(false))
                : setCount((prevCount) => prevCount + '4');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>4</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('5'), setClear(false))
                : setCount((prevCount) => prevCount + '5');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>5</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('6'), setClear(false))
                : setCount((prevCount) => prevCount + '6');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>6</TextOperator>
          </ButtonOperator>
          <ButtonOperator onPress={() => {}} bgColor={'#FA9F00'}>
            <TextOperator>-</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('1'), setClear(false))
                : setCount((prevCount) => prevCount + '1');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>1</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('2'), setClear(false))
                : setCount((prevCount) => prevCount + '2');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>2</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('3'), setClear(false))
                : setCount((prevCount) => prevCount + '3');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>3</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              setSumList([...sumList, parseInt(count)]);

              let s = 0;
              sumList.map((v) => {
                s += v;
              });
              setCount(s + parseInt(count));
              setSumList([s + parseInt(count)]);
              setClear(true);
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>+</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              clear
                ? (setCount('0'), setClear(false))
                : setCount((prevCount) => prevCount + '0');
            }}
            bWidth={'50%'}
            bgColor={'#8A8A8A'}>
            <TextOperator>0</TextOperator>
          </ButtonOperator>
          <ButtonOperator bgColor={'#8A8A8A'}>
            <TextOperator>.</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              let s = 0;
              sumList.map((v) => {
                s += v;
              });
              setCount(s + parseInt(count));
              setSumList([]);
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>=</TextOperator>
          </ButtonOperator>
        </RowContainer>
      </OperatorContainer>
    </CalculatorContainer>
  );
}
