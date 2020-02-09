import * as types from "../actions/action-types";

const initialState = {
    isLayerPanelOn: true,
    isThematicMapsOn: false,
    isComputationPanelOn: false,
    isFilterPanel: false,
    isFilterPanelDISTTKO: true,
    isGraphPanelOn: false,
    isLegendOn: true
};

const panelsSwitchReducer = function (state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_LAYER_PANEL:
            return {...state, isLayerPanelOn: action.st };
        case types.TOGGLE_THEMATIC_MAPS:
            return {...state, isThematicMapsOn: action.st };
        case types.TOGGLE_COMPUTATION_PANEL:
            return {...state, isComputationPanelOn: action.st };
        case types.TOGGLE_FILTER_PANEL:
            return {...state, isFilterPanel: action.st };
        case types.TOGGLE_FILTER_PANEL_DIST_TKO:
            return {...state, isFilterPanelDISTTKO: action.st };
        case types.TOGGLE_GRAPH_PANEL:
            return {...state, isGraphPanelOn: action.st };
        case types.TOGGLE_LEGEND:
            return {...state, isLegendOn: action.st };
        case types.TOGGLE_OFF_ALL:
            return {...state, isThematicMapsOn: false, isFilterPanel: false, isComputationPanelOn: false};
        default:
            return state;
    }
};

export default panelsSwitchReducer;