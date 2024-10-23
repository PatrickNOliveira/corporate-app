import React, { useState } from 'react';
import * as S from './styles';
import { useTranslation } from "react-i18next";
import { RadioGroup } from "../../atoms/RadioGroup/RadioGroup";
import { Input } from "../../atoms/Input/Input";
import { Spacer } from "../../atoms/Spacer/Spacer";
import { CheckboxGroup } from "../../atoms/CheckboxGroup/CheckboxGroup";
import { Button } from "../../atoms/Button/Button";
import { Formik, FieldArray } from 'formik';
import {TelaInicialData} from "../../../common/types/TelaInicialData";
import * as Yup from 'yup'
import {useSnackbar} from "../../../common/hooks/useSnackbar";
import {useErrorHandle} from "../../../common/hooks/useErrorHandle";
import {useLoading} from "../../../common/hooks/useLoading";
import NetInfo from '@react-native-community/netinfo';
import {useNavigation} from "@react-navigation/native";
import {useApi} from "../../../common/hooks/useApi";
import {CadastrarDependentesContract} from "../../../common/types/CadastrarDependentesModel";
import {useDispatch} from "react-redux";
import {DADOS_CADASTRAIS} from "../../../common/redux/actions/dadosCadastrais";

export const InitialForm = () => {
    const dispatch = useDispatch()
    const api = useApi()
    const { t } = useTranslation();
    const [telaDocumento, setTelaDocumento] = useState<1 | 2>(1);
    const snackbar = useSnackbar()
    const errorHandle = useErrorHandle()
    const loading = useLoading()
    const router = useNavigation<any>();

    const validationSchema = Yup.object().shape({
        documentType: Yup.string(),
        cpf: Yup.string().when('documentType', (documentType, schema) => {
            if (documentType[0] === 'cpf') {
                return schema.required(t('requiredField')).matches(/^\d+$/, t('onlyNumbers'));
            } else {
                return schema.nullable();
            }
        }),
        passport: Yup.string().when('documentType', (documentType, schema) => {
            if (documentType[0] === 'passport') {
                return schema.required(t('requiredField'));
            } else {
                return schema.nullable();
            }
        }),
        responsibleName: Yup.string().required(t('requiredField')),
        nationality: Yup.string().when('documentType', (documentType, schema) => {
            if (documentType[0] === 'passport') {
                return schema.required(t('requiredField'));
            } else {
                return schema.nullable();
            }
        }),
        birthdayDate: Yup.string().required(t('requiredField')),
        dependentes: Yup.array().of(
            Yup.object().shape({
                nome: Yup.string().required(t('requiredField')),
                dataNascimento: Yup.string().required(t('requiredField'))
            })
        )
    });

    const onSubmit = async (values: TelaInicialData) => {
        try {
            loading.start()
            if(values.onlyDependants && values.dependentes.length === 0) {
                snackbar.show(t('onlyDependantsValidationInfo'), 'error')
                return;
            }
            let hasConnection: boolean = false;
            const state = await NetInfo.fetch();
            hasConnection = state.isConnected ?? false;
            if (hasConnection) {
                const data = {
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
                }
                const response = await api.Cadastro.primeiroCadastro(data);
                if (values.dependentes?.length > 0) {
                    for (const d of values.dependentes) {
                        const contract: CadastrarDependentesContract = {
                            name: d.nome,
                            extraInfo: `{"birthDate":"${d.dataNascimento}"}`
                        }
                        await api.Cadastro.dependentes(contract, response.insuredClient.hash)
                    }
                }
                router.navigate('Informacoes Adicionais', {
                    data: {
                        ...values,
                        hash: response.insuredClient.hash
                    }
                })
            } else {
                router.navigate('Informacoes Adicionais', {
                    data: {
                        ...values,
                    }
                })
            }
        } catch (e) {
            errorHandle(e)
        } finally {
            loading.stop()
        }
    }

    return <>
        <S.Title>{t('register')}</S.Title>
        <Formik
            initialValues={{
                documentType: 'cpf',
                cpf: '',
                passport: '',
                responsibleName: '',
                nationality: '',
                birthdayDate: '',
                onlyDependants: false,
                dependentes: [],
                cell: '',
                email: ''
            } as TelaInicialData}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ values, handleChange, setFieldValue, handleSubmit, errors, touched }) => (
                <S.Containter>
                    <RadioGroup
                        label={t('documentType')}
                        options={[
                            { label: t('cpfInitialFormLabel'), value: 'cpf' },
                            { label: t('passportInitialFormLabel'), value: 'passport' }
                        ]}
                        defaultValue={values.documentType}
                        onChange={(value) => {
                            handleChange('documentType')(value);
                            setTelaDocumento(value === 'cpf' ? 1 : 2);
                        }}
                    />
                    <Spacer space="10px" />

                    <Input
                        placeholder={t('responsibleName')}
                        onChange={handleChange('responsibleName')}
                        value={values.responsibleName}
                        error={!!touched.responsibleName && !!errors.responsibleName}
                        helperText={touched.responsibleName && errors.responsibleName ? errors.responsibleName : t('requiredField')}
                    />
                    <Spacer space="10px" />

                    <Input
                        placeholder={(t('birthdayDate'))}
                        onChange={handleChange('birthdayDate')}
                        value={values.birthdayDate}
                        error={!!touched.birthdayDate && !!errors.birthdayDate}
                        helperText={touched.birthdayDate && errors.birthdayDate ? errors.birthdayDate : t('requiredField')}
                    />
                    <Spacer space="10px" />

                    {/* Conditional Inputs based on document type */}
                    {telaDocumento === 1 && (
                        <Input
                            placeholder={t('cpfInitialFormLabel')}
                            value={values.cpf}
                            error={!!touched.cpf && !!errors.cpf}
                            onChange={handleChange('cpf')}
                            helperText={touched.cpf && errors.cpf ? errors.cpf : t('requiredField')}
                        />
                    )}
                    {telaDocumento === 2 && (
                        <>
                            <Input
                                placeholder={t('passportInitialFormLabel')}
                                value={values.passport}
                                error={!!touched.passport && !!errors.passport}
                                onChange={handleChange('passport')}
                                helperText={touched.passport && errors.passport ? errors.passport : t('requiredField')}
                            />
                            <Spacer space="10px" />
                            <Input
                                placeholder={(t('nationality'))}
                                onChange={handleChange('nationality')}
                                value={values.nationality}
                                error={!!touched.nationality && !!errors.nationality}
                                helperText={touched.nationality && errors.nationality ? errors.nationality : t('requiredField')}
                            />
                        </>
                    )}

                    <Spacer space="10px" />
                    <CheckboxGroup
                        onChange={(v) => setFieldValue('onlyDependants', v)}
                        label={t('onlyDependants')}
                    />
                    <Spacer space="10px" />

                    <S.AlertMessage>{t('warningMessage')}</S.AlertMessage>
                    <Spacer space="10px" />
                    <S.AlertBox>
                        <S.AlertMessageLight>{t('warningMessageLight')}</S.AlertMessageLight>
                    </S.AlertBox>

                    <Spacer space="10px" />

                    {/* Dynamic Dependent Section */}
                    <FieldArray name="dependentes">
                        {({ push, remove }) => (
                            <>
                                <Button
                                    label={t('addDependant')}
                                    onClick={() =>
                                        push({
                                            id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                                            nome: '',
                                            dataNascimento: ''
                                        })
                                    }
                                />
                                {values.dependentes.map((dependente, index) => (
                                    <S.DependentBox key={dependente.id}>
                                        <Spacer space="10px" />
                                        <Input
                                            placeholder={t('dependentName')}
                                            value={dependente.nome}
                                            onChange={handleChange(`dependentes.${index}.nome`)}
                                            error={!!touched.dependentes?.[index]?.nome && !!(errors.dependentes?.[index] as any)?.nome}
                                            helperText={touched.dependentes?.[index]?.nome && (errors.dependentes?.[index] as any)?.nome
                                                ? (errors.dependentes?.[index] as any)?.nome
                                                : t('requiredField')}
                                        />
                                        <Spacer space="10px" />
                                        <Input
                                            placeholder={t('dependentBirthdayDate')}
                                            value={dependente.dataNascimento}
                                            onChange={handleChange(`dependentes.${index}.dataNascimento`)}
                                            error={!!touched.dependentes?.[index]?.dataNascimento && !!(errors.dependentes?.[index] as any)?.dataNascimento}
                                            helperText={touched.dependentes?.[index]?.dataNascimento && (errors.dependentes?.[index] as any)?.dataNascimento
                                                ? (errors.dependentes?.[index] as any)?.dataNascimento
                                                : t('requiredField')}
                                        />
                                        <Spacer space="10px" />
                                        <Button
                                            variant="danger"
                                            label={t('removeDependent')}
                                            onClick={() => remove(index)}
                                        />
                                    </S.DependentBox>
                                ))}
                            </>
                        )}
                    </FieldArray>

                    <Spacer space="10px" />
                    <Button label={t('next')} onClick={handleSubmit} />
                    <Spacer space="40px" />
                </S.Containter>
            )}
        </Formik>
    </>
};