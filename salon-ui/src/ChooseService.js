import React from "react";
import {render} from "react-dom";
import LoadingIndicator from './LoadingIndicator.js';
import AppNotificationComponent from './AppNotificationComponent.js';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck'

class ChooseService extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:8080/api/services/retrieveAvailableSalonServices")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const {error, isLoaded, items} = this.state;
        if(error) {
            return <AppNotificationComponent type = 'failure'/>
        } else if(!isLoaded) {
            return <LoadingIndicator/>
        } else {
            return (
                <div class="card-deck">

                    {items.map((item, i )=> (
                                <div class="col-sm-4">
                                <div class="card">
                                    <div class="card-header">{item.name}</div>
                                    <div class="card-body">
                                      <h5 class="card-title">${item.price}</h5>
                                      <p class="card-text">
                                        {item.description}<br/>
                                        {item.timeInMinutes} Minutes
                                      </p>
                                      <a href="#" class="btn btn-primary">Book Now</a>
                                    </div>
                                </div>
                                </div>

                    )
                    )}

                </div>

            );
        }

    }
}

export default ChooseService;