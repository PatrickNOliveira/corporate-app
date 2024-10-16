import React from 'react'
import * as S from './styles'
import {useTranslation} from "react-i18next";
import {RadioGroup} from "../../atoms/RadioGroup/RadioGroup";
import {Input} from "../../atoms/Input/Input";
import {Spacer} from "../../atoms/Spacer/Spacer";
import {CheckboxGroup} from "../../atoms/CheckboxGroup/CheckboxGroup";
import {Button} from "../../atoms/Button/Button";

export const InitialForm = () => {
    const {t} = useTranslation()
    return <>
        <S.Title>{t('register')}</S.Title>
        <S.Containter>
            <RadioGroup
                label={t('documentType')}
                options={[
                    {
                        label: t('cpfInitialFormLabel'),
                        value: 'cpf'
                    },
                    {
                        label: t('passportInitialFormLabel'),
                        value: 'passport'
                    }
                ]}
                onChange={() => {
                }}
            />
            <Spacer space="10px"/>
            <Input
                placeholder={(t('cpfInitialFormLabel'))}
                onChange={() => {
                }}
                helperText={t('requiredField')}
            />
            <Spacer space="10px"/>
            <CheckboxGroup
                onChange={() => {
                }}
                label={t('onlyDependants')}
            />
            <Spacer space="10px"/>
            <S.AlertMessage>
                {t('warningMessage')}
            </S.AlertMessage>
            <Spacer space="10px"/>
            <S.AlertBox>
                <S.AlertMessageLight>
                    {t('warningMessageLight')}
                </S.AlertMessageLight>
            </S.AlertBox>
            <Spacer space="10px"/>
            <Button label={t('addDependant')} onClick={() => {}} />
            <Spacer space="10px"/>
            <Button label={t('next')} onClick={() => {}} />
        </S.Containter>
    </>
}