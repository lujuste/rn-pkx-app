import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: white;
  display: flex;
  z-index: 10;
  position: relative;
`;

export const HeaderPokemon = styled.View`
  width: 100%;
  height: 83px;
  background-color: #02be91;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  flex-direction: row;
  align-items: center;
`;

export const LeftWrapper = styled.View`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const RightWrapper = styled.TouchableOpacity`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const TextPokemon = styled.Text`
  font-size: 28px;
  color: #fff;
`;
