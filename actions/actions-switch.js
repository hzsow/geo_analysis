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
export function toggleFilterPanelDist(st) {
    return {
        type: types.TOGGLE_FILTER_PANEL_DIST,
        st
    };
}
export function toggleFilterPanelTko(st) {
    return {
        type: types.TOGGLE_FILTER_PANEL_TKO,
        st
    };
}
export function toggleGraphPanel(st) {
    return {
        type: types.TOGGLE_GRAPH_PANEL,
        st
    };
}
export function toggleLegend(st) {
    return {
        type: types.TOGGLE_LEGEND,
        st
    };
}
