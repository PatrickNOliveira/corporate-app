import React from 'react'
import {View} from "react-native";
import {Dimensions} from 'react-native';
import {Menu} from "../../components/organisms/Menu/Menu";
import {useSelector} from "react-redux";
import {RootState} from "../redux/RootState";
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const {width, height} = Dimensions.get('window')

const Main = styled.View`
  width: ${width};
`

type Props = {
    children: JSX.Element | JSX.Element[]
}
export const TemplateProvider = ({children}: Props) => {
    const usuarioLogado = useSelector((state: RootState) => state.usuarioLogado);
    return <>
        <KeyboardAwareScrollView style={{flex: 1}}>
            <Main style={{height: usuarioLogado.access_token ? height - 90 : height}}>
                {children}
            </Main>
            {
                usuarioLogado.access_token &&
                <View style={{width: width, height: 90}}>
                    <Menu/>
                </View>
            }
        </KeyboardAwareScrollView>
    </>
}