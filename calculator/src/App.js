/* eslint-disable no-eval */

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
  font-size: 60px;
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
  const [equation, setEquation] = React.useState('');

  const updateEquation = (value) => {
    setEquation(equation + value);
  };

  const getPercentage = (value) => {
    try {
      setEquation(eval(value) / 100);
    } catch (error) {
      setEquation('Error');
    }
  };
  const getAnswer = () => {
    try {
      setEquation(eval(equation));
    } catch (error) {
      setEquation('Error');
    }
  };

  return (
    <CalculatorContainer>
      <ResultContainer>
        <TextResult>{equation || 0}</TextResult>
      </ResultContainer>
      <OperatorContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              setEquation('');
            }}
            bgColor={'#636363'}>
            <TextOperator>AC</TextOperator>
          </ButtonOperator>
          <ButtonOperator bgColor={'#636363'}>
            <TextOperator
              onPress={() => {
                setEquation(
                  equation.length !== 0 ? equation.slice(0, -1) : equation,
                );
              }}>
              DEL
            </TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              getPercentage(equation);
            }}
            bgColor={'#636363'}>
            <TextOperator>%</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              updateEquation('/');
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>÷</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          {[7, 8, 9].map((item, index) => (
            <ButtonOperator
              key={index}
              onPress={() => {
                updateEquation(item);
              }}
              bgColor={'#8A8A8A'}>
              <TextOperator>{item}</TextOperator>
            </ButtonOperator>
          ))}
          <ButtonOperator
            onPress={() => {
              updateEquation('*');
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>x</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          {[4, 5, 6].map((item, index) => (
            <ButtonOperator
              key={index}
              onPress={() => {
                updateEquation(item);
              }}
              bgColor={'#8A8A8A'}>
              <TextOperator>{item}</TextOperator>
            </ButtonOperator>
          ))}
          <ButtonOperator
            onPress={() => {
              updateEquation('-');
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>-</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          {[1, 2, 3].map((item, index) => (
            <ButtonOperator
              key={index}
              onPress={() => {
                updateEquation(item);
              }}
              bgColor={'#8A8A8A'}>
              <TextOperator>{item}</TextOperator>
            </ButtonOperator>
          ))}
          <ButtonOperator
            onPress={() => {
              updateEquation('+');
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>+</TextOperator>
          </ButtonOperator>
        </RowContainer>
        <RowContainer>
          <ButtonOperator
            onPress={() => {
              updateEquation('0');
            }}
            bWidth={'50%'}
            bgColor={'#8A8A8A'}>
            <TextOperator>0</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              updateEquation('.');
            }}
            bgColor={'#8A8A8A'}>
            <TextOperator>.</TextOperator>
          </ButtonOperator>
          <ButtonOperator
            onPress={() => {
              getAnswer();
            }}
            bgColor={'#FA9F00'}>
            <TextOperator>=</TextOperator>
          </ButtonOperator>
        </RowContainer>
      </OperatorContainer>
    </CalculatorContainer>
  );
}
