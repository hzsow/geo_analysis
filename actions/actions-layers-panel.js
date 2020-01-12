import * as types from '../actions/action-types';

export function toggleDist(st) {
    return {
        type: types.DIST_LAYER,
        st
    };
}
export function toggleTko(st) {
    return {
        type: types.TKO_LAYER,
        st
    };
}
export function toggleSadi(st) {
    return {
        type: types.SADI_LAYER,
        st
    };
}
export function toggleBolota(st) {
    return {
        type: types.BOLOTA_LAYER,
        st
    };
}
export function toggleMSS(st) {
    return {
        type: types.MSS_LAYER,
        st
    };
}
export function toggleNasPunkt(st) {
    return {
        type: types.NAS_PUNKT_LAYER,
        st
    };
}
export function toggleRiver(st) {
    return {
        type: types.RIVER_LAYER,
        st
    };
}
export function toggleRoads(st) {
    return {
        type: types.ROADS_LAYER,
        st
    };
}
export function toggleTrainRoad(st) {
    return {
        type: types.TRAIN_ROAD_LAYER,
        st
    };
}
export function toggleTrainStation(st) {
    return {
        type: types.TRAIN_STATION_LAYER,
        st
    };
}
export function toggleTsBuf(st) {
    return {
        type: types.TS_BUF_LAYER,
        st
    };
}
export function toggleDsBuf(st) {
    return {
        type: types.DS_BUF_STATION_LAYER,
        st
    };
}
export function toggleMssBuf(st) {
    return {
        type: types.MSS_BUF_STATION_LAYER,
        st
    };
}
