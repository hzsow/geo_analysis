import * as types from "../actions/action-types";

const initialState = {
    isLayerPanelOn: true,
    isThematicMapsOn: false,
    isComputationPanelOn: false,
    isFilterPanelDist: false,
    isFilterPanelTKO: false,
    isGraphPanelOn: false,
    isLegendOn: true
};

const panelsSwitchReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_LAYER_PANEL:
            return Object.assign({}, state, { isLayerPanelOn: action.st });
        case types.TOGGLE_THEMATIC_MAPS:
            return Object.assign({}, state, { isThematicMapsOn: action.st });
        case types.TOGGLE_COMPUTATION_PANEL:
            return Object.assign({}, state, { isComputationPanelOn: action.st });
        case types.TOGGLE_FILTER_PANEL_DIST:
            return Object.assign({}, state, { isFilterPanelDist: action.st });
        case types.TOGGLE_FILTER_PANEL_TKO:
            return Object.assign({}, state, { isFilterPanelTKO: action.st });
        case types.TOGGLE_GRAPH_PANEL:
            return Object.assign({}, state, { isGraphPanelOn: action.st });
        case types.TOGGLE_LEGEND:
            return Object.assign({}, state, { isLegendOn: action.st });
        default:
            return state;
    }
};

export default panelsSwitchReducer;