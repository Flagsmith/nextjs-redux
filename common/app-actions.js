const BaseConstants = {
    'ACTIVE': 'ACTIVE',
    'INACTIVE': 'INACTIVE',

    'CONNECTED': 'CONNECTED',
    'DISCONNECTED': 'DISCONNECTED',

    'LOGIN': 'LOGIN',
    'LOGIN_LOADED': 'LOGIN_LOADED',
    'LOGIN_ERROR': 'LOGIN_ERROR',

    'REGISTER': 'REGISTER',
    'REGISTER_LOADED': 'REGISTER_LOADED',
    'REGISTER_ERROR': 'REGISTER_ERROR',

    'STARTUP': 'STARTUP',
    'STARTUP_LOADED': 'STARTUP_LOADED',
    'STARTUP_ERROR': 'STARTUP_ERROR',

    'LOGOUT': 'LOGOUT',
    'SET_TOKEN': 'SET_TOKEN',
    'SET_USER': 'SET_USER',
    'REFRESH': 'REFRESH',
};

const BaseActions = {
    connected() { // when the device comes online
        return {
            type: Actions.CONNECTED,
        };
    },
    disconnected() { // when the device goes offline
        return {
            type: Actions.DISCONNECTED,
            // todo: maybe store last online
        };
    },
    active() { // when the device comes online
        return {
            type: Actions.ACTIVE,
        };
    },
    inactive() { // when the app goes out of focus
        return {
            type: Actions.INACTIVE,
            // todo: maybe store last online
        };
    },
    refresh() { // force the app to refresh data
        return {
            type: Actions.REFRESH,
        };
    },
    login(details) { // login with any auth
        return {
            type: Actions.LOGIN,
            details,
        };
    },
    // LOGIN
    loginLoaded: (user) => {
        return { type: Actions.LOGIN_LOADED, user };
    },
    loginError: (error) => {
        return { type: Actions.LOGIN_ERROR, error };
    },
    // STARTUP
    startup(data) {
        return {
            type: Actions.STARTUP,
            data,
        };
    },
    startupLoaded: (user) => {
        return { type: Actions.STARTUP_LOADED, user };
    },
    startupError: (user) => {
        return { type: Actions.STARTUP_LOADED, user };
    },
    // REGISTER
    register(details) { // register with any auth
        return {
            type: Actions.LOGIN,
            details,
        };
    },
    registerLoaded: (user) => {
        return { type: Actions.LOGIN_LOADED, user };
    },
    registerError: (error) => {
        return { type: Actions.REGISTER_ERROR, error };
    },
    logout(details) { // login with any auth
        return {
            type: Actions.LOGOUT,
            details,
        };
    },
};

global.Actions = Object.assign({}, BaseConstants, {
    'GET_WIDGETS': 'GET_WIDGETS',
    'GET_WIDGETS_LOADED': 'GET_WIDGETS_LOADED',
    'GET_WIDGETS_ERROR': 'GET_WIDGETS_ERROR',
});

global.AppActions = Object.assign({}, BaseActions, {
    getWidgets(details) { // login with any auth
        return {
            type: Actions.GET_WIDGETS,
            details,
        };
    },
});
