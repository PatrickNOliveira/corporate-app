import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootState} from './RootState';
import {rootReducer} from './reducers/root.reducer';
import {Action, createStore, Store, compose} from 'redux';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';

declare var window: any;

const getComposeEnhancers = () => {
  try {
    return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  } catch {
    return compose;
  }
};

const composeEnhancers = getComposeEnhancers();

const persistConfig: PersistConfig<RootState, any, any, any> = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: autoMergeLevel1,
  whitelist: ['usuarioLogado', 'dadosCadastrais'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

const store: Store<RootState, Action<any>> = createStore(
  persistedReducer,
  composeEnhancers(),
);

const persistor = persistStore(store);

export {store, persistor};
