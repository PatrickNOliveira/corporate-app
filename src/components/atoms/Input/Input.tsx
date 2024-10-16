import React from 'react'
import * as S from './styles'

type Props = {
    placeholder?: string
    onChange: (value: string) => void
    secureTextEntry?: boolean
    value?: string
    error?: boolean
}
export const Input = ({placeholder, onChange, secureTextEntry, value, error}: Props) => {
    return <S.TextField
        placeholderTextColor={error ? '#F00' : undefined}
        error={error}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
    />
}