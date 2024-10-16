import React from 'react'
import * as S from './styles'

type Props = {
    variant?: 'primary' | 'secondary' | 'danger'
    label: string
    onClick: () => void
}
export const Button = ({ variant, label, onClick }: Props) => {
    return <S.ButtonBox>
        <S.Button variant={variant} onPress={onClick}>
            {
                !variant || variant === 'primary' ?
                <S.LabelPrimary>{ label }</S.LabelPrimary>
                    :
                <S.LabelSecondary>{ label }</S.LabelSecondary>
            }
        </S.Button>
    </S.ButtonBox>
}