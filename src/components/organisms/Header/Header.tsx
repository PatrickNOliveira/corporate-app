import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import * as S from './style'
import {LanguageDropdown} from "../../molecules/LanguageDropdown/LanguageDropdown";

const logo = require('../../../assets/logo-corporate.png')

// Componente principal de cabeçalho
export const Header = () => {
    return (
        <S.HeaderContainer>
            {/* Logo da Empresa */}
            <S.LogoContainer>
                <S.Logo source={logo}/>
            </S.LogoContainer>
            <S.ContentContainter>
                <S.CompanyContainer>
                    <S.CompanyText>Sua empresa</S.CompanyText>
                </S.CompanyContainer>

                {/* Seleção de Idioma */}
                <S.LanguageContainer>
                    <LanguageDropdown />
                </S.LanguageContainer>
            </S.ContentContainter>
        </S.HeaderContainer>
    );
};