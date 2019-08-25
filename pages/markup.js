import React, { Component } from 'react';
import propTypes from 'prop-types';
import Switch from 'rc-switch';
import { ModalHeader, Modal, ModalBody, ModalFooter } from '../components/Modal';

import withWidgets from '../common/providers/withWidgets';
import DatePicker from '../components/DatePicker';

class Examples extends React.Component {
    static displayName = 'Examples';

    static propTypes = {
        children: propTypes.node.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            children: props.children,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...nextProps,
        });
    }

    search = (e) => {
        const search = Utils.safeParseEventValue(e)
            .toLowerCase();
        this.setState({
            search,
            children: search ? _.filter(this.props.children, c => c.type.displayName && c.type.displayName.toLowerCase()
                .indexOf(search) !== -1) : this.props.children,
        });
    };

    render() {
        const { state: { children, search } } = this;
        return (
            <div>
                <InputGroup
                  title="search"
                  value={search}
                  className="pb-2"
                  placeholder="Search for cards or lists..."
                  onChange={this.search}
                />
                {
                    children.map((child, i) => (
                        <FormGroup key={i}>
                            <h3>
                                {child.type.displayName}
                            </h3>
                            {child}
                        </FormGroup>
                    ))
                }
            </div>
        );
    }
}

class MarkupPage extends Component {
    displayName = 'MarkupPage';

    static async getInitialProps({ ctx: { store } }) {
        await store.dispatch(AppActions.getWidgets());
        return {};
    }

    constructor(props) {
        super(props);
        this.state = {};
    }

    toggle=() => {
        this.setState({ modal: !this.state.modal });
    }

    render() {
        return (
            <div className="container">
                <Examples>

                    <FormGroup>
                        <h4 className="mt-5 mb-5">Typeography</h4>
                        <h1>Heading H1</h1>
                        <h2>Heading H2</h2>
                        <h3>Heading H2</h3>
                        <h4>Heading H2</h4>
                    </FormGroup>

                    <FormGroup>
                        <h4 className="mt-5 mb-5">Buttons (click to toggle modal)</h4>
                        <ButtonPrimary onClick={this.toggle}>Primary</ButtonPrimary>
                    </FormGroup>
                    <FormGroup>
                        <ButtonSecondary onClick={this.toggle}>Secondary</ButtonSecondary>
                    </FormGroup>

                    <FormGroup>
                        <ButtonTertiary onClick={this.toggle}>Tertiary</ButtonTertiary>
                    </FormGroup>

                    <Row>
                        <ButtonTertiary className="mr-2" onClick={this.toggle}>Toggle inline modal</ButtonTertiary>
                        <ButtonTertiary
                          className="mr-2"
                          onClick={() => openConfirm('Confirm', 'Body',
                              () => {
                                  alert('Selected Yes');
                              },
                              () => {
                                  alert('Selected No');
                              })}
                        >
                            Open confirm
                        </ButtonTertiary>
                        <ButtonTertiary
                          onClick={() => openAlert('Confirm', 'Body', () => {
                              alert('Dismissed');
                          })}
                        >
                            Open alert
                        </ButtonTertiary>
                    </Row>
                    <h4 className="mt-5 mb-5">Panel</h4>

                    <Panel title={<h3>Test</h3>}>
                        body
                    </Panel>

                    <h4 className="mt-5 mb-5">Forms</h4>

                    <InputGroup type="email" title="Default" placeholder="Test"/>
                    <Input type="email" title="Default" placeholder="Test"/>
                    <InputGroup
                      onChange={(e) => {
                          this.setState({ val: Utils.safeParseEventValue(e) });
                      }}
                      isValid={this.state.val}
                      type="text"
                      title="Required"
                      placeholder="Required Input"
                    />
                    <InputGroup
                      onChange={(e) => {
                          this.setState({ email: Utils.safeParseEventValue(e) });
                      }}
                      isValid={Utils.isValidEmail(this.state.email)}
                      type="text"
                      title="Valid Email"
                      placeholder="Enter an Email"
                    />
                    <Row>
                        <InputGroup
                          inputProps={{ mask: '11/11' }}
                          name="expiry"
                          placeholder="dd/yy"
                          title="Masked"
                        />
                    </Row>
                    <Row>
                        <InputGroup
                          inputProps={{ mask: '11:11 am' }}
                          name="expiry"
                          placeholder="hh:mm am"
                          title="Masked"
                        />
                    </Row>
                    <InputGroup
                      title="Switch"
                      input={(
                          <Switch
                            aria-label="Switch"
                            id="switch"
                            onMouseUp={() => this.setState({ checked: !this.state.checked })}
                            checked={this.state.checked}
                          />
                        )}
                    />

                    <h4 className="mt-5 mb-5">Tabs</h4>
                    <Tabs value={this.state.tab} onChange={tab => this.setState({ tab })}>
                        <div tablabel="Tab 1">
                            <p>Tab 1 content</p>
                        </div>
                        <div tablabel="Tab 2">
                            <p>Tab 2 content</p>
                        </div>
                    </Tabs>

                    <InputGroup
                      id="date-picker"
                      inputProps={{ mask: '11:11 am' }}
                      title="Date Picker"
                      input={(
                          <DatePicker
                            id="date-picker"
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            dateFormat="MMMM d, yyyy h:mm aa"
                          />
                          )}
                    />

                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                        <ModalBody>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.toggle}>Do Something</Button>
                            {' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </Examples>
            </div>
        );
    }
}


export default withWidgets(MarkupPage);
