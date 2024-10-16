import React from 'react';
import * as S from './style'
import {LanguageDropdown} from "../../molecules/LanguageDropdown/LanguageDropdown";
import {useTranslation} from "react-i18next";

const logo = require('../../../assets/logo-corporate.png')

// Componente principal de cabeçalho
export const Header = () => {
    const { t } = useTranslation();
    return (
        <S.HeaderContainer>
            {/* Logo da Empresa */}
            <S.LogoContainer>
                <S.Logo source={logo}/>
            </S.LogoContainer>
            <S.ContentContainter>
                <S.CompanyContainer>
                    <S.CompanyText>{t('your_company')}</S.CompanyText>
                </S.CompanyContainer>

                {/* Seleção de Idioma */}
                <S.LanguageContainer>
                    <LanguageDropdown />
                </S.LanguageContainer>
            </S.ContentContainter>
        </S.HeaderContainer>
    );
};