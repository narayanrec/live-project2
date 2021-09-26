import React, {Fragment} from "react";
import {loadingIndicator} from './loading-indicator.js';
import {appNotification} from './app-notification.js';
import {withRouter} from "react-router";

class ChooseService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        loadingIndicator.show();
        console.log('making call');
        fetch("http://localhost:8080/api/services/retrieveAvailableSalonServices")
        .then(res => res.json())
        .then(
            (result) => {
                loadingIndicator.hide();
                this.setState({
                    items: result
                });
            },
            (error) => {
                loadingIndicator.hide();
                console.log('in error');
                appNotification.showError("Unable to retrieve Spa Services  - " + error)
            }
        )
        .catch(errorObject=>this.onError(errorObject))
    }

    onError(error){
            loadingIndicator.hide();
            appNotification.showError("Unable to retrieve Spa Services  - " + error)
        }

    render() {
        const {items} = this.state;

        return (
            <Fragment>
            <div className="card-deck text-center">

                {items.map((item, i )=> (
                            <div key = {i} className="col-sm-4">
                            <div className="card">
                                <div className="card-header"><h4>{item.name}</h4></div>
                                <div className="card-body">
                                  <h5 className="card-title">${item.price}</h5>
                                  <p className="card-text">
                                    {item.description}< br/>
                                    {item.timeInMinutes} Minutes
                                  </p>
                                  <button type="button" onClick= {(evt) => this.bookFor(item)} className="btn btn-primary">Book Now</button>
                                </div>
                            </div>
                            </div>

                )
                )}

            </div>
            </Fragment>
        );


    }
    bookFor(item) {
        this.props.history.push(`/chooseslot/${item.id}/${item.name}`);
    }
}

export default withRouter(ChooseService);