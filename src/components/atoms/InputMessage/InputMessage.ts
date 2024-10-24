import styled from "styled-components/native";

interface InputMessageProps {
    error?: boolean
}
export const InputMessage = styled.Text<InputMessageProps>`
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0;
  text-align: left;
  color:  ${(props) =>
          !props.error
                  ? '#000'
                  : '#f00'};
  width: 90%;
`