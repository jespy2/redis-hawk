import React, { Component } from "react";
import { connect } from "react-redux";
import KeyEventComponent from "./KeyEventComponent.jsx";
import EventsPagination from "./EventsPagination.jsx";

const mapStateToProps = (store) => {
  return {
    database: store.currDatabaseStore.database,
    events: store.eventsStore.events,
  };
};


class EventComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const listOfEvents = this.props.events.map((obj) => {
      <KeyEventComponent
        events={obj.props.events}
        database={obj.props.database}
      />;
    });
    return (
      <div id='eventComponentContainer'>
        <div id='KeyEventsDiv'>
          <ul id='keyEventList'>{listOfEVents}</ul>
        </div>
        <EventsPagination />
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(EventComponent);
