import styled from "styled-components/native";
import {Colors} from "../../../common/constants/Colors";

export const IconBox = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`

export const Label = styled.Text`
  margin-top: 5%;
  color: ${Colors.PRIMARY};
  text-align: center;
  font-size: 12px;
`