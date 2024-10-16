import React, {useMemo} from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useSelector} from "react-redux";
import {RootState} from "../redux/RootState";

export type BackDropProps = {
    children: JSX.Element
};

export const LoadingProvider = ({children}: BackDropProps) => {
    const mostrarProcessamento = useSelector(
        (state: RootState) => state.realizandoProcessamento,
    )
    const mostrar = useMemo(() => mostrarProcessamento === 'ATIVO', [mostrarProcessamento])
    const styles = StyleSheet.create({
        spinnerTextStyle: {
            color: '#FFF',
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            backgroundColor: '#F5FCFF',
        },
    });
    return (
        <>
            {children}
            {mostrar && (
                <View style={styles.container}>
                    <Spinner
                        visible={mostrar}
                        textContent={'Carregando...'}
                        textStyle={styles.spinnerTextStyle}
                    />
                </View>
            )}
        </>
    );
};
