import React from "react";
import {useSnackbar} from "./useSnackbar";

export const useErrorHandle = () => {
    const snackbar = useSnackbar()
    return (error: any) => {
        console.log(error?.response)
        snackbar.show(
            error?.response?.data?.message[0] && error?.response?.status !== 500
                ?
                error?.response?.data?.message[0] :
                'Houve um erro desconhecido, por favor, tente novamente ou entre em contato com o administrador do sistema',
            'error'
        )
    }
}