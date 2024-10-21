import React, {useEffect} from 'react';
import * as S from './styles';
import { useTranslation } from "react-i18next";
import { Input } from "../../atoms/Input/Input";
import { Spacer } from "../../atoms/Spacer/Spacer";
import { Button } from "../../atoms/Button/Button";
import { Formik } from 'formik';
import {TelaInicialData} from "../../../common/types/TelaInicialData";
import * as Yup from 'yup'
import {useErrorHandle} from "../../../common/hooks/useErrorHandle";
import {useLoading} from "../../../common/hooks/useLoading";
import {useNavigation, useRoute} from "@react-navigation/native";

export const AdditionalInfoForm = () => {
    const { t } = useTranslation();
    const errorHandle = useErrorHandle()
    const loading = useLoading()
    const router = useNavigation<any>();

    const validationSchema = Yup.object().shape({
        cell: Yup.string().required(t('requiredField')).matches(/^\d+$/, t('onlyNumbers')),
        email: Yup.string().required(t('requiredField')).email(t('invalidEmail'))
    });

    const route = useRoute<any>();
    const { data } = route.params;

    const onSubmit = async (values: TelaInicialData) => {
        try {
            loading.start()
            console.log(values)
        } catch (e) {
            errorHandle(e)
        } finally {
            loading.stop()
        }
    }

    return <>
        <S.Title>{t('additionalInfo')}</S.Title>
        <Formik
            initialValues={{
                ...data,
                cell: '',
                email: ''
            } as TelaInicialData}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
                <S.Containter>
                    <Spacer space="10px" />

                    <Input
                        placeholder={t('cell')}
                        value={values.cell}
                        error={!!touched.cell && !!errors.cell}
                        onChange={handleChange('cell')}
                        helperText={touched.cell && errors.cell ? errors.cell : t('requiredField')}
                    />
                    <Spacer space="10px" />

                    <Input
                        placeholder="E-mail"
                        value={values.email}
                        error={!!touched.email && !!errors.email}
                        onChange={handleChange('email')}
                        helperText={touched.email && errors.email ? errors.email : t('requiredField')}
                    />
                    <Spacer space="10px" />

                    <Button label={t('next')} onClick={handleSubmit} />
                    <Spacer space="40px" />
                </S.Containter>
            )}
        </Formik>
    </>
};