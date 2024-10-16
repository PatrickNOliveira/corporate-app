import * as React from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import * as S from './styles'

type Props = {
    label: string
    options: RadioGroupOption[]
    onChange: (value: string) => void
}

export type RadioGroupOption = {
    label: string
    value: string
}

export const RadioGroup = ({ label, options, onChange }: Props) => {
    const [value, setValue] = React.useState<string>('first');
    const onValueChange = (newValue: string) => {
        setValue(newValue)
        onChange(newValue)
    }
    return <>
        <S.Label>{label}</S.Label>
        <RadioButton.Group onValueChange={newValue => onValueChange(newValue)} value={value}>
            {
                options.map((o, key) => (
                    <S.RadioBox key={key}>
                        <RadioButton value={o.value} />
                        <S.RadioLabel>{o.label}</S.RadioLabel>
                    </S.RadioBox>
                ))
            }
        </RadioButton.Group>
    </>
};
