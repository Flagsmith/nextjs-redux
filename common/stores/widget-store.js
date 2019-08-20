import BaseStore from './base/_store';
import OfflineStore from './offline-store';
import data from './base/_data';

const store = Object.assign({}, BaseStore, {
    id: 'account',
    model: [],
});

const controller = {
    addWidget(widget, originalAction) {
        if (!widget.offlineId) {
            widget.offlineId = OfflineStore.generateOfflineId();
            store.model.push(widget);
            AsyncStorage.setItem('widgets', JSON.stringify(store.model));
        } else {
            console.log('RETRYING CREATE WIDGET', widget);
        }

        return data.post(`${Project.api}widget`, widget)
            .then((res) => {
                const index = _.findIndex(store.model, { offlineId: widget.offlineId });
                store.model[index] = res;
                AsyncStorage.setItem('widgets', JSON.stringify(store.model));
                store.saved();
                AppActions.resolveOfflineId(widget.offlineId, widget.id);
            })
            .catch(() => {
                store.saved();
                console.log('CREATE WIDGET FAILED, QUEING', widget);
                AppActions.queueAction(originalAction);
            });
    },
};

store.dispatcherIndex = Dispatcher.register(store, (payload) => {
    const action = payload.action; // this is our action from handleViewAction

    switch (action.actionType) {
        case Actions.ADD_WIDGET:
            controller.addWidget(action.widget, action);
            break;
        default:
            break;
    }
});

AsyncStorage.getItem('widgets', (err, res) => {
    if (res) {
        store.model = JSON.parse(res);
        store.changed();
    }
});

controller.store = store;
module.exports = controller.store;
