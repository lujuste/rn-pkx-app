//@ts-ignore
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
`;

export const View = styled.ScrollView`
  flex: 1;
  background-color: white;
  display: flex;
  padding: 10px 24px 20px 14px;
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
`;

export const WrapperPokemon = styled.View`
  display: flex;
  width: 100%;
  height: 100px;
  /* background: #d9d9d9; */
  justify-content: space-between;
  flex-direction: row;

  :last-child {
    background-color: red;
  }
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
  background: #d9d9d9;
  display: flex;
`;

export const Round = styled.View`
  width: 78;
  height: 78;
  border-radius: 38px;
  background: #d9d9d9;
`;
