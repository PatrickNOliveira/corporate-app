import styled from "styled-components/native";
import { Colors } from "../../../common/constants/Colors";

interface ButtonProps {
    variant?: "primary" | "secondary" | "danger";
}
export const Button = styled.TouchableOpacity<ButtonProps>`
  background: ${(props) =>
          !props.variant || props.variant === "primary"
                  ? "#FFF"
                  : props.variant === 'secondary' ? Colors.PRIMARY : Colors.DANGER};
  width: 90%;
  border-radius: 10px;
`

export const LabelPrimary = styled.Text`
  color: ${Colors.PRIMARY};
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