import {ItemMultipleSelect} from "../../components/atoms/Select/Select";

export function ConverterEmMultipleSelect<T>(
    data: T[],
    labelKey: string,
    valueKey: string,
    iconName?: string,
    description1Key?: string,
    description2Key?: string
): ItemMultipleSelect[] {
    const items: ItemMultipleSelect[] = []
    for (const item of data) {
        items.push({
            label: (item as any)[labelKey],
            value: (item as any)[valueKey],
            iconName: iconName ?? '',
            description1: description1Key ? (item as any)[description1Key] : '',
            description2: description2Key ? (item as any)[description2Key] : ''
        })
    }
    return items;
}