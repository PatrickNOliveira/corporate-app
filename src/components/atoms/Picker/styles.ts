import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled.TouchableOpacity`
  border-radius: 10px;
  border: 1px solid rgba(0,0,0,0.3);
  padding: 10px;
  width: 90%;
`

export const Label = styled.Text`
  color: rgba(0,0,0,1);
`
