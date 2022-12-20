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

export const WrapperImage = styled.View`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60;
`;

export const WrapperDescription = styled.View`
  width: 100%;
  height: 65%;
  margin-top: 36;
  padding-left: 20;
  padding-right: 20;
`;

export const Circle = styled.View`
  width: 240px;
  height: 240px;
  background: brown;
  border-radius: 120;

  background-color: #ddd2d2;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.View`
  width: 100%;
  height: 69;
  margin-top: 26;
`;

export const Type = styled.View`
  width: 110;
  height: 37;
  margin: 0 auto;
  margin-top: 20;
  border-radius: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background: red;
`;

export const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;

export const HeadingDescription = styled.Text`
  font-size: 18;
`;

export const TextDescription = styled.Text``;

export const LoadingWrapper = styled.View<{ height: string | number }>`
  flex: 1;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => String(Number(height) - 200)};
`;
