import React from 'react';
import Pen from './Small';

class Results extends React.Component {

    //our constructor
    constructor(props) {
        //this calls the parent constructor
        super(props);
    }

    //Our method used by react, and is required for components
    render() {

        let self = this;

        let showMoreOrClear;

        if(this.props.end < this.props.total){
            showMoreOrClear = <a href="javascript:;" className="c-btn" onClick={this.props.handleShowMore}>Show More</a>;
        }

        return (
            <div className="s-posts__results">
                <div className="s-posts__results__container">
                    <div className="l-card-listing">

                        {this.props.pens.map(function (item, i) {
                            //return Pen(item, i, self.props.handleFilterByType);
                            return <Pen key={i} handler={self.props.handleFilterByType} item={item} />
                        })}

                    </div>

                    <div className="s-posts__results__pagination">
                        {showMoreOrClear}
                    </div>

                </div>
            </div>
        );
    }
}

export default Results;
