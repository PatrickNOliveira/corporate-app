import React from 'react'
import {Header} from "../../organisms/Header/Header";
import * as S from './styles'
import {useTranslation} from "react-i18next";
import {Button} from "../../atoms/Button/Button";
import {Spacer} from "../../atoms/Spacer/Spacer";
import {useNavigation} from "@react-navigation/native";

export const Final = () => {
    const {t} = useTranslation()
    const router = useNavigation<any>()
    return <>
        <Header/>
        <S.Info>{t('success')}</S.Info>
        <S.Box>
            <S.Box2>
                <Spacer space="10px" />
                <Button label="Realizar novo cadastro" onClick={() => {
                    router.navigate('Index')
                }}/>
            </S.Box2>
        </S.Box>
    </>
}