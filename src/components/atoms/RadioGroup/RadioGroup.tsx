import * as React from 'react';
import { RadioButton } from 'react-native-paper';
import * as S from './styles';

type Props = {
    label: string;
    options: RadioGroupOption[];
    onChange: (value: string) => void;
    defaultValue?: string;
};

export type RadioGroupOption = {
    label: string;
    value: string;
};

export const RadioGroup = ({ label, options, onChange, defaultValue }: Props) => {
    const [value, setValue] = React.useState<string>(defaultValue || options[0].value);

    const onValueChange = (newValue: string) => {
        setValue(newValue);
        onChange(newValue);
    };

    return (
        <>
            <S.Label>{label}</S.Label>
            <RadioButton.Group onValueChange={onValueChange} value={value}>
                {options.map((o, key) => (
                    <S.RadioBox key={key}>
                        <RadioButton value={o.value} />
                        <S.RadioLabel>{o.label}</S.RadioLabel>
                    </S.RadioBox>
                ))}
            </RadioButton.Group>
        </>
    );
};