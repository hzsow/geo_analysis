import * as types from "../actions/action-types";

const initialState = {
    isDist: true,
    isTko: false,
    isTsBuf: false,
    isDsBuf: false,
    isMssBuf: false,
    isSadi: false,
    isBolota: false,
    isMss: false,
    isNasPunkt: false,
    isRivers: false,
    isRoads: false,
    isTrainRoad: false,
    isTrainStation: false,
    isComputationLayersAreFetching: false,
    isComputationLayersAreReady: false

};

const layersPanelReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.DIST_LAYER:
            return {...state, isDist: action.st};
        case types.TKO_LAYER:
            return {...state, isTko: action.st};
        case types.SADI_LAYER:
            return {...state, isSadi: action.st};
        case types.BOLOTA_LAYER:
            return {...state, isBolota: action.st};
        case types.MSS_LAYER:
            return {...state, isMss: action.st};
        case types.NAS_PUNKT_LAYER:
            return {...state, isNasPunkt: action.st};
        case types.RIVER_LAYER:
            return {...state, isRivers: action.st};
        case types.ROADS_LAYER:
            return {...state, isRoads: action.st};
        case types.TRAIN_ROAD_LAYER:
            return {...state, isTrainRoad: action.st};
        case types.TRAIN_STATION_LAYER:
            return {...state, isTrainStation: action.st};
        case types.TS_BUF_LAYER:
            return {...state, isTsBuf: action.st};
        case types.DS_BUF_STATION_LAYER:
            return {...state, isDsBuf: action.st};
        case types.MSS_BUF_STATION_LAYER:
            return {...state, isMssBuf: action.st};
        case types.GET_COMPUTATION_DONE:
            return {...state, isComputationLayersAreReady: true};
        case types.GET_COMPUTATION_FETCH:
            return {...state, isComputationLayersAreFetching: true};
        default:
            return state;
    }
};

export default layersPanelReducer;