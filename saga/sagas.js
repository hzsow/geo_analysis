import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import {all} from "@redux-saga/core/effects";
import * as types from "../actions/action-types";
import store from "../store/store";
import * as layers from "../modules/Layers";

function* watchAll() {
    yield all([
        takeEvery(types.DIST_LAYER, () => layers.dist.setVisible(store.getState().layersPanelState.isDist)),
        takeEvery(types.TKO_LAYER, () => layers.tko.setVisible(store.getState().layersPanelState.isTko)),
        takeEvery(types.SADI_LAYER, () => layers.sadi.setVisible(store.getState().layersPanelState.isSadi)),
        takeEvery(types.BOLOTA_LAYER, () => layers.bolota.setVisible(store.getState().layersPanelState.isBolota)),
        takeEvery(types.MSS_LAYER, () => layers.mss.setVisible(store.getState().layersPanelState.isMss)),
        takeEvery(types.NAS_PUNKT_LAYER, () => layers.nasPunkt.setVisible(store.getState().layersPanelState.isNasPunkt)),
        takeEvery(types.RIVER_LAYER, () => layers.rivers.setVisible(store.getState().layersPanelState.isRivers)),
        takeEvery(types.ROADS_LAYER, () => layers.roads.setVisible(store.getState().layersPanelState.isRoads)),
        takeEvery(types.TRAIN_ROAD_LAYER, () => layers.trainRoad.setVisible(store.getState().layersPanelState.isTrainRoad)),
        takeEvery(types.TRAIN_STATION_LAYER, () => layers.trainStation.setVisible(store.getState().layersPanelState.isTrainStation)),
        takeEvery(types.TS_BUF_LAYER, () => layers.tsBuf.setVisible(store.getState().layersPanelState.isTsBuf)),
        takeEvery(types.DS_BUF_STATION_LAYER, () => layers.dsBuf.setVisible(store.getState().layersPanelState.isDsBuf)),
        takeEvery(types.MSS_BUF_STATION_LAYER, () => layers.mssBuf.setVisible(store.getState().layersPanelState.isMssBuf)),
        takeEvery(types.TOGGLE_GRAPH_PANEL, () => store.getState().panelsSwitchState.isGraphPanelOn ? layers.addInteraction() : layers.removeInteraction()),
        takeEvery(types.SELECT_FORECAST, () => {
            layers.removeInteractionForecast().addInteractionForecast();
        }),
        takeEvery(types.GET_COMPUTATION_FETCH, () => layers.getComputationLayers())
    ]);
}


export default watchAll;