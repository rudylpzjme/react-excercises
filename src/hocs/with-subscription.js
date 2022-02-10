import React from 'react';

function withSubscription(WrappedComponent, endpointUrl) {
  class WithSubscription extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      }
    }

    componentDidMount() {
      fetch(endpointUrl)
      .then(response => response.json())
      .then(dataResponse => this.setState({ data: dataResponse.slice(0, 3) }));
    }

    render() {
      return (
        <WrappedComponent
          data={this.state.data}
          { ...this.props }
        />
      )
    }
  }
  WithSubscription.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;

  return WithSubscription;
}

export default withSubscription;

/**
 * The container components created by HOCs show up in the React Developer Tools like any other component.
 * To ease debugging, choose a display name that communicates that it’s the result of a HOC.
 * @param {*} WrappedComponent 
 * @returns string
 */
function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}
