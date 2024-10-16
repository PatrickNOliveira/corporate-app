import React from 'react'
import * as S from './styles'

type Props = {
    children: JSX.Element
    label: string
    onClick: () => void
}
export const MenuIcon = ({children, label, onClick}: Props) => {
    return <S.IconBox onPress={onClick}>
        {children}
        <S.Label>
            {label}
        </S.Label>
    </S.IconBox>
}