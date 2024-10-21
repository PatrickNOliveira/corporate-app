import React, {useEffect} from 'react'
import {Header} from "../../organisms/Header/Header";
import {Text} from "react-native";
import {useIsFocused, useRoute} from "@react-navigation/native";
import {AdditionalInfoForm} from "../../organisms/AdditionalInfoForm/AdditionalInfoForm";

export const InformacoesAdicionais = () => {
    return <>
        <Header />
       <AdditionalInfoForm />
    </>
}