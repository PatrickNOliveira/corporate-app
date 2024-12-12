import React, {useEffect, useState} from 'react'
import {Header} from "../../organisms/Header/Header";
import * as S from './styles'
import {useTranslation} from "react-i18next";
import {Text} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Spacer} from "../../atoms/Spacer/Spacer";
import {CheckboxGroup} from "../../atoms/CheckboxGroup/CheckboxGroup";
import {Button} from "../../atoms/Button/Button";
import {useSelector} from "react-redux";
import {RootState} from "../../../common/redux/RootState";
import {useErrorHandle} from "../../../common/hooks/useErrorHandle";
import {useLoading} from "../../../common/hooks/useLoading";
import {useApi} from "../../../common/hooks/useApi";
import NetInfo from "@react-native-community/netinfo";

export const Termos = () => {
    const dadosCadastrais = useSelector((state: RootState) => state.dadosCadastrais);
    const errorHandle = useErrorHandle()
    const loading = useLoading()
    const api = useApi()
    const {t} = useTranslation()
    const router = useNavigation<any>();
    const route = useRoute<any>();
    const {data} = route.params;
    const [disabled, setDisabled] = useState<boolean>(true)
    const renderizarComorbidades = () => {
        const rows = [];
        for (let i = 1; i <= 16; i++) {
            rows.push(<S.ListItem key={i}>
                <S.NumberText>-</S.NumberText>
                <S.Paragraph>
                    {t(`declarationData.6.comorbidities.${i}`)}
                </S.Paragraph>
            </S.ListItem>);
        }
        return rows.map((r, key) => (
            r
        ));
    }
    const onSubmit = async () => {
        try {
            loading.start();
            let hasConnection: boolean = false;
            const state = await NetInfo.fetch();
            hasConnection = state?.isConnected ?? false;
            if (hasConnection) {
                await api.Cadastro.aceitarTermos(data.hash);
                router.navigate('Final')
            }
        } catch (e) {
            errorHandle(e);
        } finally {
            loading.stop();
        }
    }
    return <>
        <Header/>
        <S.Title>{t('disclaimer')}</S.Title>
        <S.Container>
            <S.ContainterUserInfo>
                <S.LabelInfo>{t('completeName')}:</S.LabelInfo>
                <S.Info>{data?.responsibleName}</S.Info>
            </S.ContainterUserInfo>
            <S.ContainterUserInfo>
                <S.LabelInfo>{t('birthdayDate')}:</S.LabelInfo>
                <S.Info>{data?.birthdayDate}</S.Info>
            </S.ContainterUserInfo>
            <S.ContainterUserInfo>
                <S.LabelInfo>{t('document')}:</S.LabelInfo>
                <S.Info>{data?.cpf && data?.cpf?.length > 0 ? data?.cpf : data?.passport}</S.Info>
            </S.ContainterUserInfo>
            <S.ContainterUserInfo>
                <S.LabelInfo>E-mail:</S.LabelInfo>
                <S.Info>{data?.email}</S.Info>
            </S.ContainterUserInfo>

            <S.ContainerList>
                <S.TitleList>{t('instructions')}</S.TitleList>

                <S.ListItem>
                    <S.NumberText>1. </S.NumberText>
                    <S.Paragraph>
                        {t('numberOne')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>2. </S.NumberText>
                    <S.Paragraph>
                        {t('numberTwo')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>3. </S.NumberText>
                    <S.Paragraph>
                        {t('numberThree')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>4. </S.NumberText>
                    <S.Paragraph>
                        {t('numberFour')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>5. </S.NumberText>
                    <S.Paragraph>
                        {t('numberFive')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>6. </S.NumberText>
                    <S.Paragraph>
                        {t('numberSix')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>7. </S.NumberText>
                    <S.Paragraph>
                        {t('numberSeven')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>8. </S.NumberText>
                    <S.Paragraph>
                        {t('numberEight')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>9. </S.NumberText>
                    <S.Paragraph>
                        {t('numberNine')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>10. </S.NumberText>
                    <S.Paragraph>
                        {t('numberTen')}
                    </S.Paragraph>
                </S.ListItem>

            </S.ContainerList>
            <S.ContainerList>
                <S.TitleList>{t('declaration')}</S.TitleList>

                <S.ListItem>
                    <S.NumberText>1. </S.NumberText>
                    <S.Paragraph>
                        {t('declarationData.1')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>2. </S.NumberText>
                    <S.Paragraph>
                        {t('declarationData.2')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>3. </S.NumberText>
                    <S.Paragraph>
                        {t('declarationData.3')}
                    </S.Paragraph>
                </S.ListItem>
                <S.Container2>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.mask')}
                        </S.Paragraph>
                    </S.ListItem>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.cough')}
                        </S.Paragraph>
                    </S.ListItem>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.touching')}
                        </S.Paragraph>
                    </S.ListItem>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.distance')}
                        </S.Paragraph>
                    </S.ListItem>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.physical_contact')}
                        </S.Paragraph>
                    </S.ListItem>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.cleaning')}
                        </S.Paragraph>
                    </S.ListItem>
                    <S.ListItem>
                        <S.NumberText>-</S.NumberText>
                        <S.Paragraph>
                            {t('declarationData.4.personal_items')}
                        </S.Paragraph>
                    </S.ListItem>
                </S.Container2>
                <S.ListItem>
                    <S.NumberText>4. </S.NumberText>
                    <S.Paragraph>
                        {t('declarationData.5')}
                    </S.Paragraph>
                </S.ListItem>
                <S.Container2>
                    {renderizarComorbidades()}
                </S.Container2>
            </S.ContainerList>
            <S.ContainerList>
                <S.TitleList>{t('petProcedures')}</S.TitleList>

                <S.ListItem>
                    <S.NumberText>1. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.allowed_in_room')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>2. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.walks_policy')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>3. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.kennel_availability')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>4. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.sanitary_law')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>5. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.no_bedding_policy')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>6. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.cleaning_notice')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>7. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.responsibility_policy')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>8. </S.NumberText>
                    <S.Paragraph>
                        {t('pets_policy.other_animals_notice')}
                    </S.Paragraph>
                </S.ListItem>
            </S.ContainerList>
            <S.ContainerList>
                <S.TitleList>{t('activity')}</S.TitleList>

                <S.SubTitleList>{t('mountain_riding')}</S.SubTitleList>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('scheduling_info')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('first_departure')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('second_departure')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('capacity_limit')}
                    </S.Paragraph>
                </S.ListItem>

                <S.SubTitleList>{t('climbing')}</S.SubTitleList>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('scheduling_info_arborism')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('operating_hours_arborism')}
                    </S.Paragraph>
                </S.ListItem>

                <S.ListItem>
                    <S.NumberText>-</S.NumberText>
                    <S.Paragraph>
                        {t('capacity_limit_arborism')}
                    </S.Paragraph>
                </S.ListItem>

            </S.ContainerList>
            <Spacer space="80px"/>
        </S.Container>
        <S.Content>
            <CheckboxGroup
                onChange={(v) => {
                    setDisabled(!v)
                }}
                label={t('agree_terms')}
            />
            <Button label={t('next')} disabled={disabled} onClick={onSubmit}/>
        </S.Content>
    </>
}