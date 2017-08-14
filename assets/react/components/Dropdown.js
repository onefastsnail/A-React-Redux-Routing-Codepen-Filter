import React from 'react';

class Dropdown extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    //a method to handle our clicks
    handleChange(e) {

        if (typeof (e.target.dataset.value) === 'undefined') return false;

        let x = {
            key: this.props.filter,
            value: e.target.dataset.value
        };

        this.props.handler(x);

    }

    //Our method used by react, and is required for components
    render() {

        //we need to capture the current scope of this before we venture in our map calls
        var self = this;

        var count = self.props.selected.length;

        return (
            <div className="c-dropdown">
                <div className="c-dropdown__toggle"><span>{count}</span>{this.props.title}</div>
                <ul className="c-dropdown__list">
                    {this.props.options.map(function (row, i) {

                        var activeClass = (self.props.selected.indexOf(row) > -1) ? ' c-dropdown__list__item--active' : '';

                        return <li key={i} className={"c-dropdown__list__item"+activeClass}><a href="javascript:;" onClick={self.handleChange} data-value={row}>{row}</a></li>

                    })}
                </ul>
            </div>
        );
    }
}

export default Dropdown;
