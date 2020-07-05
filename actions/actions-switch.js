import * as types from '../actions/action-types';

export function toggleLayerPanel(st) {
    return {
        type: types.TOGGLE_LAYER_PANEL,
        st
    };
}
export function toggleThematicMap(st) {
    return {
        type: types.TOGGLE_THEMATIC_MAPS,
        st
    };
}
export function toggleComputationPanel(st) {
    return {
        type: types.TOGGLE_COMPUTATION_PANEL,
        st
    };
}
export function toggleFilterPanel(st) {
    return {
        type: types.TOGGLE_FILTER_PANEL,
        st
    };
}
export function toggleFilterPanelDISTTKO(st) {
    return {
        type: types.TOGGLE_FILTER_PANEL_DIST_TKO,
        st
    };
}
export function toggleGraphPanel(st) {
    return {
        type: types.TOGGLE_GRAPH_PANEL,
        st
    };
}
export function toggleForecastPanel(st) {
    return {
        type: types.TOGGLE_FORECAST_PANEL,
        st
    };
}
export function toggleLegend(st) {
    return {
        type: types.TOGGLE_LEGEND,
        st
    };
}
export function toggleOffAll() {
    return {
        type: types.TOGGLE_OFF_ALL
    };
}
export function fetchComputationLayers() {
    return {
        type: types.GET_COMPUTATION_FETCH
    };
}
export function computationLayersIsDone() {
    return {
        type: types.GET_COMPUTATION_DONE
    };
}
