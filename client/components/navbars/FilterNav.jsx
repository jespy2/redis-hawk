import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchFilter from './SearchFilter.jsx';
import * as actions from '../../action-creators/connections';

const mapStateToProps = (store) => {
  return {
    keyspace: store.keyspaceStore.keyspace,
    events: store.eventsStore.events,
    keyGraph: store.keyGraphStore.keyGraph,
    currDatabase: store.currDatabaseStore.currDatabase,
    currPage: store.currPageStore.currPage,
    currDisplay: store.currDisplayStore.currDisplay,
  };
};
const mapDispatchToProps = (dispatch) => ({
  updateEvents: (events) => dispatch(actions.updateEventsActionCreator(events)),
  updateKeyspace: (keyspace) =>
    dispatch(actions.updateKeyspaceActionCreator(keyspace)),
  updateKeyGraph: (keyGraph) =>
    dispatch(actions.updateKeyGraphActionCreator(keyGraph)),
  updateCurrentDisplay: (display) =>
    dispatch(actions.updateCurrDisplayActionCreator(display)),
});

class FilterNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //assign a variable to each search filter option\
    if (this.props.currPage === 'graphs') {
      //working on the events graphs
      return (
        <div className='filterNavContainer'>
          {/* conditional rendering */}
          <SearchFilter
            id='searchFilter'
            events={this.props.events[this.props.currDatabase]}
          />
          {/* insert onClick */}
          <button
            id='searchButton'
            onClick={(e) => {
              e.preventDefault();
              this.props.updateKeyGraph(1, this.props.currDatabase);
            }}
            id='refreshButton'
          >
            Refresh
          </button>
        </div>
      );
    } else if (this.props.currPage === 'events') {
      return (
        <div className='filterNavContainer'>
          {/* conditional rendering */}
          <SearchFilter
            id='searchFilter'
            events={this.props.events[this.props.currDatabase]}
          />
          {/* insert onClick */}
          <button
            id='searchButton'
            onClick={(e) => {
              e.preventDefault();
              this.props.updateEvents(1, this.props.currDatabase);
            }}
            id='refreshButton'
          >
            Refresh
          </button>
        </div>
      );
    } else {
      return (
        <div className='filterNavContainer'>
          <SearchFilter
            id='searchFilter'
            keyspace={this.props.keyspace[this.props.currDatabase]}
          />
          {/* insert onClick */}
          <button
            id='searchButton'
            onClick={(e) => {
              e.preventDefault();
              this.props.updateKeyspace(1, this.props.currDatabase);
            }}
            id='refreshButton'
          >
            Refresh
          </button>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterNav);
