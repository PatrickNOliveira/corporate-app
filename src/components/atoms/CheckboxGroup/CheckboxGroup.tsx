import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import * as S from './style';

type Props = {
    label: string,
    onChange: (value: boolean) => void
}

export const CheckboxGroup = ({label, onChange}: Props) => {
    const [checked, setChecked] = React.useState(false);
    const onChangeValue = () => {
        setChecked(!checked);
        onChange(!checked)
    }
    return <S.Box>
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => onChangeValue()}
        />
        <S.Label>
            {label}
        </S.Label>
    </S.Box>
};