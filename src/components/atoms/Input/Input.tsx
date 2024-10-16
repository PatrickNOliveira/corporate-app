import React from 'react'
import * as S from './styles'
import {InputMessage} from "../InputMessage/InputMessage";

type Props = {
    placeholder?: string
    onChange: (value: string) => void
    secureTextEntry?: boolean
    value?: string
    error?: boolean
    helperText?: string
}
export const Input = ({placeholder, onChange, secureTextEntry, value, error, helperText}: Props) => {
    return <>
        <S.TextField
            placeholderTextColor={error ? '#F00' : undefined}
            error={error}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onChangeText={onChange}
            value={value}
        />
        {
            helperText && <InputMessage error={error}>
                {helperText}
            </InputMessage>
        }
    </>
}