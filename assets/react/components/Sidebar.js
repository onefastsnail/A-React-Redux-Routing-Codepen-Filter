import React from 'react';

class Sidebar extends React.Component {

  //our constructor
  constructor(props) {
    //this calls the parent constructor
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  //a method to handle our clicks
  handleClick(item) {}

  //Our method used by react, and is required for components
  render() {

    //we need to capture the current scope of this before we venture in our map calls
    let self = this;

    //we also need to bind self within the map iteration so the current method is called

    return (
      <div>
        <h3>Heading</h3>
        <p>This is a paragraph of text. Some of the text may be <em>emphasised</em> and some it might even be <strong>strongly emphasised</strong>. Occasionally <q>quoted text</q> may be found within a paragraph &hellip;and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.</p>

        <h3>Heading</h3>
        <p>This is a paragraph of text. Some of the text may be <em>emphasised</em> and some it might even be <strong>strongly emphasised</strong>. Occasionally <q>quoted text</q> may be found within a paragraph &hellip;and of course <a href="#">a link</a> may appear at any point in the text. The average paragraph contains five or six sentences although some may contain as little or one or two while others carry on for anything up to ten sentences and beyond.</p>
      </div>
    );
  }
}

export default Sidebar;
