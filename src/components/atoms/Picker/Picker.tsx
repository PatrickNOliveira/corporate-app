import React, { useState } from 'react';
import { Modal } from 'react-native';
import {ItemMultipleSelect, PickerSelect} from "../Select/Select";
import * as S from './styles'
import {Label} from "../Label/Label";

interface RowInputProps {
    label: string;
    onChange: (items: ItemMultipleSelect) => void;
    value?: ItemMultipleSelect;
    items: ItemMultipleSelect[];
}

export const Picker = (props: RowInputProps) => {
    const [selecionados, setSelecionados] = useState<ItemMultipleSelect>(
        props.value ?? ({} as ItemMultipleSelect)
    );
    const [open, setOpen] = useState<boolean>(false);
    return (
        <S.Container>
            <Label>{props.label}</Label>
            <S.Field onPress={() => setOpen(true)}>
                <S.Label>{selecionados?.label ?? 'Selecione'}</S.Label>
            </S.Field>
            <Modal animationType="slide" transparent visible={open} onRequestClose={() => setOpen(false)}>
                <PickerSelect
                    onClose={() => setOpen(false)}
                    onChange={(items) => {
                        setSelecionados(items);
                        props.onChange(items);
                        setOpen(false);
                    }}
                    items={props.items}
                />
            </Modal>
        </S.Container>
    );
}

