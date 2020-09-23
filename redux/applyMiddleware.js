//Importa las dependencias necesarias para aplicar los Midd
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose } from 'redux';

//Crea el mazclador de Midd
let enhancerCompose = compose;
//Inicializa Saga
const saga = createSagaMiddleware();
//Guarda los Midd en un arreglo
const middleware = [saga, thunk];

//Exporta saga
export const sagaMiddleware = saga;
//Exporta la mezcla final Mid
export default enhancerCompose(applyMiddleware(...middleware));