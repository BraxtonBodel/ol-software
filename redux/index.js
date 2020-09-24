// Importamos el creadoi de tienda
import { createStore } from 'redux';
// Importamos nuestro applyMidd
import applyMiddleware, { sagaMiddleware } from './applyMiddleware';
// Importamos nuestros reducers
import reducers from './ducks';
// Importamos nuestros sagas
import rootSaga from './sagas';

const store = createStore(reducers, applyMiddleware);
sagaMiddleware.run(rootSaga);

export default store;