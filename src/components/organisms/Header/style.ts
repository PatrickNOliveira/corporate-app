import styled from "styled-components/native";
export const HeaderContainer = styled.View`
    background-color: #4CAF50; /* Cor verde */
    padding: 10px;
`;

export const ContentContainter = styled.View`
    flex-direction: row;
    align-items: center;
`

export const LogoContainer = styled.View`
    padding-top: 25px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 50px;
`;

export const CompanyContainer = styled.View`
  flex: 2;
`;

export const CompanyText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const LanguageContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const Flag = styled.Image`
  width: 25px;
  height: 25px;
  margin-right: 5px;
`;

export const pickerSelectStyles = {
    fontSize: 16,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    backgroundColor: '#4CAF50',
};