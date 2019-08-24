/**
 * Created by kylejohnson on 30/07/2016.
 */
import React from 'react';
import propTypes from 'prop-types';

const Tabs = ({ children, className, onChange, value }) => (
    <div className={`tabs ${className || ''}`}>
        <div className="tabs-nav">
            {children.map((child, i) => {
                const isSelected = value === i;
                return (
                    <Button
                      id={child.props.id}
                      key={`button${i}`}
                      onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          onChange(i);
                      }}
                      className={`btn ${isSelected ? 'tab-active' : ''}`}
                    >
                        {child.props.tablabel}
                    </Button>
                );
            })}
        </div>
        <div
          className="tab-line"
          style={{
              width: `${100 / children.length}%`,
              left: `${100 / children.length * value}%`,
          }}
        />
        <div className="tabs-content">
            {children.map((child, i) => {
                const isSelected = value === i;
                return (
                    <div key={`content${i}`} className={`tab-item${isSelected ? ' tab-active' : ''}`}>
                        {child}
                    </div>
                );
            })}
        </div>
    </div>
);

Tabs.displayName = 'Tabs';

Tabs.defaultProps = {
    className: '',
    value: 0,
};

Tabs.propTypes = {
    className: propTypes.string,
    onChange: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
    value: propTypes.number,
};

global.Tabs = Tabs;

// Example Usage
//   <Tabs value={this.state.tab} onChange={this.selectTab}>
//     <div tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 1 content</h2>
//     </div>
//     <div tabLabel={(<span className="fa fa-phone tab-icon"/>)}>
//       <h2>Tab 2 content</h2>
//     </div>
//   </Tabs>
