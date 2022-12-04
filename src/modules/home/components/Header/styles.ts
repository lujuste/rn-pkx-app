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
  justify-content: space-between;
  flex-direction: row;
`;

export const ClosedButton = styled.View`
  width: 15%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const AreaInput = styled.View`
  width: 85%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const InputDefault = styled.TextInput`
  width: 100%;
  height: 100%;
`;

export const MenuDots = styled.View`
  width: 207px;
  height: 250px;
  background-color: white;
  position: absolute;
  z-index: 990;
  top: 10px;
  right: 10px;
  padding: 16px;
  padding-top: 0px;
`;

export const Box = styled.View`
  width: 207px;
  height: 500px;
  background-color: #fff;
  display: flex;
  margin-left: auto;
`;

export const TextLabel = styled.Text`
  font-size: 24px;
  color: #000;
  margin: 14px 3px;
`;
