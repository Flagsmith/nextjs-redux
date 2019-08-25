export default (state = {
    isConnected: true,
}, action) => {
    if (typeof window === 'undefined') {
        API.log('SERVER', action.type);
    } else {
        API.log('DISPATCHER', action.type);
    }
    switch (action.type) {
        case Actions.LOGIN:
            return { ...state, userLoading: true };
        case Actions.LOGIN_LOADED:
            return { ...state, userLoading: false, user: action.data };
        case Actions.LOGIN_ERROR:
            return { ...state, userLoading: false, userError: action.data };

        case Actions.GET_WIDGETS:
            return { ...state, widgetsLoading: true };
        case Actions.GET_WIDGETS_LOADED:
            return { ...state, widgetsLoading: false, widgets: action.data };
        case Actions.GET_WIDGETS_ERROR:
            return { ...state, userLoading: false, widgetsError: action.data };

        case Actions.STARTUP_LOADED:
            return { ...state, ...action.data };
        case Actions.LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};
