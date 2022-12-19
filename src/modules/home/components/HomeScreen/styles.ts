import styled from "styled-components/native";

const handleColorType = (type: string) => {
  switch (type) {
    case "grass":
      return "color: #03a9f3; background: #00A5e3;";
    case "poison":
      return "color: #fff; background: #00CDAC;";
    case "fire":
      return "color: #fff; background: #FF5768;";
    case "flying":
      return "color: #fff; background: #f56342;";
    case "normal":
      return "color: #fff; background: #C05780;";
    case "bug":
      return "color: #fff; background: #FF60A8;";
    case "water":
      return "color: #fff; background: #00A5E3;";
    default:
      return "color: #fff; background: #00A5E3;";
  }
};

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

export const WrapperPokemon = styled.TouchableOpacity`
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

export const Description = styled.View`
  margin-left: 3px;
  display: flex;
  flex-direction: row;
  height: 70px;
  max-width: 200px;
  align-items: center;
`;

export const Rect = styled.View<{ type?: string }>`
  height: 47px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  border-radius: 5px;
  margin-right: 10px;
  ${({ type }: any) => handleColorType(type)}
`;

export const TextType = styled.Text`
  font-size: 16px;
  color: white;
  font-weight: bold;
`;

export const EmptyContainer = styled.View<{ height: any }>`
  display: flex;
  width: 100%;
  overflow-y: hidden;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => String(Math.ceil(height - 200))};
`;

export const TextPokemonNotFound = styled.Text`
  font-size: 20px;
  color: black;
`;
