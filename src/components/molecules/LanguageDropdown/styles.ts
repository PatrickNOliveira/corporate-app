import styled from "styled-components/native";

export const Button = styled.TouchableOpacity`
    width: 120px;
`
export const Container = styled.View`
  padding: 10px;
  background-color: #4CAF50; /* Verde */
`;

export const SelectedLanguageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  padding: 8px;
  border-radius: 4px;
`;

export const SelectedText = styled.Text`
  margin-left: 8px;
  color: #000;
`;

export const Flag = styled.Image`
  width: 25px;
  height: 25px;
`;

export const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.View`
  width: 80%;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const LanguageOption = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
`;

export const LanguageText = styled.Text`
  margin-left: 10px;
  font-size: 16px;
`;