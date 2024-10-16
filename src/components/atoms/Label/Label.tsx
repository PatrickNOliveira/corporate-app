import styled from "styled-components/native";
import {Colors} from "../../../common/constants/Colors";

interface LabelProps {
    error?: boolean
}
export const Label = styled.Text<LabelProps>`
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;
  color:  ${(props) =>
          !props.error
                  ? Colors.LABEL
                  : '#F00'};
  width: 90%;
`