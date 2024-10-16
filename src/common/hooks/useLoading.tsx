import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {REALIZANDO_PROCESSAMENTO} from "../redux/actions/realizandoProcessamento.actions";

export const useLoading = () => {
    const dispatch = useDispatch()
    const start = useCallback(() => {
        dispatch({
            type: REALIZANDO_PROCESSAMENTO.ATIVO,
        });
    }, [dispatch, REALIZANDO_PROCESSAMENTO])

    const stop = useCallback(() => {
        dispatch({
            type: REALIZANDO_PROCESSAMENTO.NENHUM,
        });
    }, [dispatch, REALIZANDO_PROCESSAMENTO])
    return {
        start,
        stop
    }
}