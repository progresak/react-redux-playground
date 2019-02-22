import React from 'react';
import Container from './Container';

class App extends React.Component {

    state = {
        mousePositionX: null,
        mousePositionY: null,
    };

    onMouseMove = (e) => {

        this.setState({
            mousePositionX: e.clientX,
            mousePositionY: e.clientY,
        })
    }

    render() {

        return(<div>
            <Container
                x={this.state.mousePositionX}
                y={this.state.mousePositionY}
                onMouseMove={this.onMouseMove}
            >
                <div>
                    <span>X: {this.state.mousePositionX} </span>
                    <span>Y: {this.state.mousePositionY} </span>
                </div>
            </Container>

        </div>);
    }
}

export default App;