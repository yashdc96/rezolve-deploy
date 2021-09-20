import React, { Component } from 'react'

export default class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState(
                    {
                        isLoaded: true,
                        items: json,
                    }
                )
            });
    }
    render() {
        this.props.setApiData(this.state.items)
        return <div> </div>
    }
}
