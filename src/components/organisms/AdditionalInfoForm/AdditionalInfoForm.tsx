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
import NetInfo from "@react-native-community/netinfo";
import {useApi} from "../../../common/hooks/useApi";
import {CadastrarInformacoesAdicionaisContract} from "../../../common/types/InformacoesAdicionaisModel";
import {useDispatch} from "react-redux";
import {DADOS_CADASTRAIS} from "../../../common/redux/actions/dadosCadastrais";

export const AdditionalInfoForm = () => {
    const dispatch = useDispatch()
    const { t } = useTranslation();
    const errorHandle = useErrorHandle()
    const loading = useLoading()
    const api = useApi()
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
            let hasConnection: boolean = false;
            const state = await NetInfo.fetch();
            hasConnection = state.isConnected ?? false;
            //TODO: REMOVER ANTES DE DEPLOYAR
            hasConnection = false;
            if (hasConnection) {
                const contract: CadastrarInformacoesAdicionaisContract = {
                    CellPhone: values.cell,
                    email: values.email
                }
                await api.Cadastro.extraInfo(contract, data.hash)
                router.navigate('Termos', { data: {...values, hash: data.hash} })
            } else {
                const novoDado = {
                    telaInicial: {
                        primeiroCadastro: {
                            name: values.responsibleName,
                            birthDate: values.birthdayDate,
                            nationality: values.nationality,
                            companyHash: 'identificacao1',
                            doc: values.cpf,
                            docType: values.documentType === 'cpf' ? 2 : 1,
                            phone: values.cell,
                            email: values.email,
                            contactPhone: "+55",
                            contactName: "",
                            isConnected:true,
                            status: "",
                            onlyDependants: values.onlyDependants,
                            pdvId:null
                        },
                        dependentes: values.dependentes.map(d => (
                            {
                                name: d.nome,
                                extraInfo: `{"birthDate":"${d.dataNascimento}"}`
                            }
                        )),
                    },
                    informacoesAdicionais: {
                        CellPhone: values.cell,
                        email: values.email
                    }
                }
                dispatch({
                    type: DADOS_CADASTRAIS.SALVAR_TELA_INICIAL,
                    novoDado
                });
                router.navigate('Termos', { data: {...values } })
            }
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