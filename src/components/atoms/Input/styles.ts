import styled from "styled-components/native";

interface TextFieldProps {
    error?: boolean
}
export const TextField = styled.TextInput<TextFieldProps>`
  border-radius: 10px;
  border: ${(props) =>
          !props.error
                  ? '1px solid rgba(0,0,0,0.3)'
                  : '1px solid red'};
  padding: 10px;
  width: 90%;
`