import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 83px;
  background-color: #02be91;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 23px;
  color: white;
`;

export const FlexView = styled.View`
  width: 20%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FlexViewLeft = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Button = styled.Button`
  background-color: transparent;
`;

export const InputWrapper = styled.View`
  width: 100%;
  height: 70%;
  background-color: white;
  display: flex;
  align-items: center;
  border-radius: 5px;
`;

export const ClosedButton = styled.View`
  width: 30%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const AreaInput = styled.View`
  width: 70%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;