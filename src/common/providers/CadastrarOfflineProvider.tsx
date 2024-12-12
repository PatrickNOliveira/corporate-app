import React, {useEffect, useState} from "react";
import NetInfo from "@react-native-community/netinfo";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../redux/RootState";
import {useErrorHandle} from "../hooks/useErrorHandle";
import {useLoading} from "../hooks/useLoading";
import {useApi} from "../hooks/useApi";
import {DADOS_CADASTRAIS} from "../redux/actions/dadosCadastrais";

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const CadastrarOfflineProvider = ({children}: Props) => {
    const dispatch = useDispatch()
    const [hasConnection, setHasConnection] = useState<boolean>(false);
    const dadosCadastrais = useSelector((state: RootState) => state.dadosCadastrais);
    const errorHandle = useErrorHandle()
    const loading = useLoading()
    const api = useApi()

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            const connected = state.isConnected ?? false;
            setHasConnection(connected);

            if (connected) {
                processOfflineQueue();
            }
        });

        return () => unsubscribe();
    }, [hasConnection, dadosCadastrais]);

    const processOfflineQueue = async () => {
        try {
            if (dadosCadastrais?.length > 0) {
                console.log('Processo iniciado com os dados', dadosCadastrais)
                for (const d of dadosCadastrais) {
                    const data = d?.telaInicial?.primeiroCadastro
                    if (data) {
                        const response = await api.Cadastro.primeiroCadastro(data);
                        if (d?.telaInicial?.dependentes && d?.telaInicial?.dependentes?.length > 0) {
                            for (const dp of d?.telaInicial?.dependentes) {
                                await api.Cadastro.dependentes(dp, response.insuredClient.hash)
                            }
                        }
                        if (d?.informacoesAdicionais) {
                            await api.Cadastro.extraInfo(d?.informacoesAdicionais, response?.insuredClient?.hash)
                        }
                        await api.Cadastro.aceitarTermos(response?.insuredClient?.hash);
                    }
                }
                dispatch({
                    type: DADOS_CADASTRAIS.LIMPAR,
                });
                console.log('Processo finalizado com sucesso')
            }
        } catch (e) {
            console.log('Processo com erro', e)
            errorHandle(e)
        }
    }
    return <>
        {children}
    </>
}