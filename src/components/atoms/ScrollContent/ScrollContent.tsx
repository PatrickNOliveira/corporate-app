import React from 'react'
import * as S from './styles'

type Props = {
    children: JSX.Element[] | JSX.Element
}
export const ScrollContent = ({children}: Props) => {
    return <S.Content>
        {children}
    </S.Content>
}