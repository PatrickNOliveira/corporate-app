import React from 'react'
import * as S from './styles'
import {ImageSourcePropType} from "react-native/Libraries/Image/Image";

type Props = {
    image: ImageSourcePropType
}
export const CircularImage = ({ image }: Props) => {
    return <>
        <S.Img source={image} />
    </>
}