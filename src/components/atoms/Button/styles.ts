import styled from "styled-components/native";
import { Colors } from "../../../common/constants/Colors";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger";
}
export const Button = styled.TouchableOpacity<ButtonProps>`
  background: #3c8d11;
  width: 100%;
  border-radius: 5px;
`

export const LabelPrimary = styled.Text`
  color: #FFF;
  text-transform: uppercase;
  font-weight: 600;  
  text-align: center;
  padding: 15px;
  font-size: 17px;
`

export const LabelSecondary = styled.Text`
  color: #FFF;
  text-align: center;
  padding: 15px;
  font-size: 17px;
`

export const ButtonBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`