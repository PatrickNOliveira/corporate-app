import React, {useCallback} from "react";
import {useDispatch} from "react-redux";
import {SNACKBAR} from "../redux/actions/snackbar.actions";

export const useSnackbar = () => {
    const dispatch = useDispatch()
    const show = useCallback((message: string, variant: 'success' | 'error') => {
        dispatch({
            type: SNACKBAR.MOSTRAR,
            message,
            visible: true,
            variant
        });
    }, [dispatch, SNACKBAR])

    const hide = useCallback(() => {
        dispatch({
            type: SNACKBAR.ESCONDER,
        });
    }, [dispatch, SNACKBAR])
    return {
        show,
        hide
    }
}