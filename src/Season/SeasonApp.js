import React from 'react';
import SeassionDisplay from './SessionDisplay'
import Spinner from './Spinner'



class SeasonApp extends React.Component {

    state = { lat: null, errorMessage: "" }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat:position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    renderContent() {
        if (this.state.lat && !this.state.errorMessage) {
            return (
                <div>
                    <SeassionDisplay lat={this.state.lat} />
                </div>
            );
        }
        if (!this.state.lat && this.state.errorMessage) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        return (
            <Spinner message={'Please accept location request'} />
        );
    }

    render() {

        return (
            <div className={'border red'}>
                {this.renderContent()}
            </div>
        )
    }
}

export default SeasonApp;