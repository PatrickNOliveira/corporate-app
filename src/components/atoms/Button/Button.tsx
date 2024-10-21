import React from 'react'
import * as S from './styles'

type Props = {
    variant?: 'primary' | 'secondary' | 'danger'
    label: string
    onClick: () => void
    disabled?: boolean
}
export const Button = ({ variant, label, onClick, disabled }: Props) => {
    return <S.ButtonBox>
        {
            disabled && <S.DisabledButton>
                <S.LabelSecondary>{ label }</S.LabelSecondary>
            </S.DisabledButton>
        }
        {
            !disabled &&
            <S.Button variant={variant} onPress={onClick}>
                {
                    !variant || variant === 'primary' ?
                        <S.LabelPrimary>{ label }</S.LabelPrimary>
                        :
                        <S.LabelSecondary>{ label }</S.LabelSecondary>
                }
            </S.Button>
        }
    </S.ButtonBox>
}