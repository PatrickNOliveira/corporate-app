import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
// eslint-disable-next-line import/namespace
import {Dimensions, Pressable, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import {Spacer} from "../Spacer/Spacer";
import {Button} from "../Button/Button";
import {Colors} from "../../../common/constants/Colors";

const {height} = Dimensions.get('window');

export interface ItemMultipleSelect {
    value: any;
    label: string;
    description1: string;
    description2: string;
    iconName: string;
}

interface P4CardProps {
    onClose: () => void;
    items: ItemMultipleSelect[];
    allowVoid?: boolean;
    onChange: (items: ItemMultipleSelect) => void;
}

export const PickerSelect = (props: P4CardProps) => {
    const [selecionados, setSelecionados] = useState<ItemMultipleSelect>({} as ItemMultipleSelect);
    const Card = styled.View`
      width: 90%;
      justify-content: flex-start;
      background-color: #FFF;
      border-radius: 10px;
      padding-vertical: 20px;
      padding-horizontal: 20px;
      height: ${props.items.length <= 2 ? height : '100%'};
    `;

    const selectItem = (selecionado: ItemMultipleSelect) => {
        setSelecionados(selecionado);
    };
    return <>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ScrollContainer>
                <Container>
                    <Card>
                        <Row style={{justifyContent: 'space-between'}}>
                            <TitlePage>Selecione</TitlePage>
                            <Pressable onPress={props.onClose}>
                                <MaterialCommunityIcons name="close" size={25}/>
                            </Pressable>
                        </Row>
                        <Spacer space="12px"/>
                        {props.items.map((i, key) => (
                            <React.Fragment key={key}>
                                <Spacer space="12px"/>
                                <Info isSelected={selecionados === i} onPress={() => selectItem(i)}>
                                    <SpacedRow>
                                        <Title>{i.label}</Title>
                                    </SpacedRow>

                                    <Spacer space="6px"/>

                                    <Row>
                                        <FontAwesome5 color={Colors.LABEL} size={15} name={i.iconName}/>
                                        <Spacer direction="horizontal" space="4px"/>
                                        <CountText>{i.description1}</CountText>
                                    </Row>

                                    <Spacer space="16px"/>
                                    <AddressText>{i.description2}</AddressText>
                                </Info>
                            </React.Fragment>
                        ))}
                        <Spacer space="12px"/>
                        <Spacer space="12px"/>
                    </Card>
                </Container>
            </ScrollContainer>
        </ScrollView>
        <Footer>
            <Button
                label="Enviar"
                variant="secondary"
                onClick={() => props.onChange(selecionados)}
            />
        </Footer>
    </>
}

const Row = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  color: ${Colors.LABEL};
  font-weight: bold;
  font-size: 16px;
`;

const TitlePage = styled.Text`
  color: ${Colors.LABEL};
  font-weight: bold;
  font-size: 20px;
`;

const Container = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 110%;
  padding-top: 70px;
  margin-bottom: 50px;
`;

const ScrollContainer = styled.View`
  flex: 1;
`;

const Info = styled.TouchableOpacity<{ isSelected: boolean }>`
  background: ${({isSelected}) => (isSelected ? '#daf6f5' : '#F0F5F4')};
  border-radius: 10px;
  padding: 10px;
`;

const SpacedRow = styled(Row)`
  align-items: flex-start;
  justify-content: space-between;
`;

const CountText = styled(Text)`
  color: ${Colors.LABEL};
  font-size: 13px;
  font-weigth: bold;
`;

const AddressText = styled(Text)`
  color: ${Colors.LABEL};
  font-size: 13px;
  font-weight: 300;
`;

export const Footer = styled.View`
  background: #FFF;
  height: 100px;
  padding-top: 20px;
  width: 100%;
  position: absolute;
  z-index: 9999;
  bottom: 0px;
`