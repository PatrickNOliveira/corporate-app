import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from "./src/routes/Routes";
import {TemplateProvider} from "./src/common/providers/Template.provider";
import {Provider} from 'react-redux';
import {store} from "./src/common/redux/store";
import {SnackbarProvider} from "./src/common/providers/Snackbar.provider";
import {LoadingProvider} from "./src/common/providers/Loading.provider";
import {navigationRef} from './src/common/utils/RootNavigation';
import {I18nextProvider} from 'react-i18next';
import i18n from "./src/i18n";

export default function App() {
    return (
        <Provider store={store}>
            <LoadingProvider>
                <SnackbarProvider>
                    <NavigationContainer ref={navigationRef}>
                        <I18nextProvider i18n={i18n}>
                            <TemplateProvider>
                                <Routes/>
                            </TemplateProvider>
                        </I18nextProvider>
                    </NavigationContainer>
                </SnackbarProvider>
            </LoadingProvider>
        </Provider>
    );
}
