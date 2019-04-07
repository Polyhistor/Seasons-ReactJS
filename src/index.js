import React from 'react'
import ReactDom from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'

class App extends React.Component {

    state = { lat: null, erroMessage:'' }

    // The lifecycle is like this -> constructor - render - commentDidMount - commentDidUpdate - commentWillUnmount
 
    componentDidMount() { // this is a good place to load data

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // we call setState to update our state
                this.setState({ lat: position.coords.latitude,})
            }, // success callback 
            err => this.setState({ erroMessage: err.message }) // error callback
        )

    }

    componentDidUpdate() {
        console.log('my component was just updated - rerendered')
    }

    renderContent() {
        
        if(this.state.erroMessage && !this.state.lat) {
            return <div>Error: {this.state.erroMessage}</div>
        }

        if (!this.state.erroMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}></SeasonDisplay> 
        }

        return <Spinner message="Please accept location request"/>

    }

    // React requirement
    render() {

        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        )
        
    }
}

ReactDom.render( 
    <App/>, 
    document.querySelector('#root')
)
 