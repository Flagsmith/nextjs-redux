import BaseStore from './base/_store';
import data from './base/_data';

const store = Object.assign({}, BaseStore, {
    id: 'account',
    model: [],
    inProgress: [],
    generateOfflineId() {
        return `OFFLINE_ID_${Utils.GUID()}`;
    },
    resolveOfflineId(offlineId, id) {
        return `OFFLINE_ID_${Utils.GUID()}`;
    },

});

const controller = {

};

store.resolvers = [];

store.dispatcherIndex = Dispatcher.register(store, (payload) => {
    const action = payload.action; // this is our action from handleViewAction

    switch (action.actionType) {
        case Actions.QUEUE_ACTION:
            store.model.push(action);
            AsyncStorage.setItem('offline-queue', JSON.stringify({
                model: store.model,
                inProgress: store.inProgress,
            }));
            break;
        case Actions.RESOLVE_OFFLINE_ID:
            _.each(_.find(store.resolvers, { offlineId: action.id }), (resolver) => {
                resolver.resolve();
            });
            break;
        default:
    }
});


store.waitForId = function (offlineId) {
    return new Promise((resolve) => {
        store.resolvers.push({
            offlineId,
            resolve,
        });
    });
};

controller.store = store;
module.exports = controller.store;


AsyncStorage.getItem('offline-queue', (err, res) => {
    if (res) {
        const model = JSON.parse(res);
        store.model = model.model.concat(model.inProgress);
    }
});


setInterval(() => {
    if (store.model.length) {
        const action = store.model.pop();
        store.inProgress.push(action);
        AppActions.dispatch(action.action);
    }
}, 2000);
