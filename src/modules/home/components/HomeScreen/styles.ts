//@ts-ignore
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
  z-index: 10;
  position: relative;
`;

export const View = styled.ScrollView`
  flex: 1;
  background-color: white;
  display: flex;
  padding: 10px 24px 20px 14px;
`;

export const ViewFlex = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.Pressable`
  width: 100;
  height: 40;
  color: white;
  background-color: red;
  elevation: 30;
`;

export const Text = styled.Text`
  color: white;
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

export const WrapperPokemon = styled.View`
  display: flex;
  width: 100%;
  height: 100px;
  /* background: #d9d9d9; */
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const DivRound = styled.View`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`;

export const DivName = styled.View`
  width: 75%;
  height: 100%;
  display: flex;
  margin-left: 10px;
  padding: 10px 0;
  justify-content: center;
`;

export const DivDetails = styled.View`
  width: 100%;
  height: 58;

  display: flex;
`;

export const Round = styled.ImageBackground`
  width: 100;
  height: 80;
  /* border-radius: 38px; */
`;

export const Description = styled.Text`
  margin-left: 10px;
`;
