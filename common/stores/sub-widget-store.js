import BaseStore from './base/_store';
import OfflineStore from './offline-store';
import data from './base/_data';

const store = Object.assign({}, BaseStore, {
    id: 'account',
    model: {},
});

const controller = {
    addSubWidget(subWidget, widget, originalAction) {
        if (!subWidget.offlineId) {
            subWidget.offlineId = OfflineStore.generateOfflineId();
        }
        if (widget.offlineId) {
            return OfflineStore.waitForId(widget.offlineId)
                .then(id => controller.post(id, subWidget, originalAction));
        }

        return controller.post(subWidget, widget, originalAction);
    },
    post(id, subWidget, originalAction) {
        return data.post(`${Project.api}widget/${id}`, subWidget)
            .then((res) => {
                AppActions.resolveOfflineId(subWidget.offlineId, subWidget.id);
                store.saved();
            })
            .catch(() => {
                store.saved();
                console.log('CREATE SUB WIDGET FAILED, QUEING', subWidget);
                AppActions.queueAction(originalAction);
            });
    },
};

store.dispatcherIndex = Dispatcher.register(store, (payload) => {
    const action = payload.action; // this is our action from handleViewAction

    switch (action.actionType) {
        case Actions.ADD_SUB_WIDGET:
            controller.addSubWidget(action.subWidget, action.widget, action);
            break;
        default:
            break;
    }
});

controller.store = store;
module.exports = controller.store;
