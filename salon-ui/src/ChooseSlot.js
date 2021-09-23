import React, {Fragment} from "react";
import {loadingIndicator} from './loading-indicator.js';
import {appNotification} from './app-notification.js';
import {useParams} from "react-router-dom";

class ChooseService extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lookupDate: '',
            items: []
        }
        [this.serviceId, this.serviceName] = useParams();
    }



    handleChange(event) {
        this.setState({lookupDate: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        loadingIndicator.show();
        fetch("http://localhost:8080/api/services/retrieveAvailableSlots/" + this.serviceId + "/" + this.state.lookupDate)
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
        appNotification.showError("Unable to retrieve slots  - " + error)
    }

    render() {
        const {lookupDate, items} = this.state;
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Choose a date for ${this.serviceName}: </label>
                <input type="date" value={this.state.lookupDate} onChange={this.handleChange}/>
                <input type="submit" value="Show Slots"/>
            </form>

            <Fragment>
            <div className="card-deck text-center">

                {items.map((item, i )=> (
                            <div className="col-sm-4">
                            <div key = {i} className="card ">
                                <div className="card-header"><h4>{this.serviceName}</h4></div>
                                <div className="card-body">
                                  <h5 className="card-title">${item.stylistName}</h5>
                                  <p className="card-text">
                                    {item.slotFor}< br/>

                                  </p>
                                  <button type="button" onClick= {(evt) => this.bookFor(item)} className="btn btn-primary">Book this Slot</button>
                                </div>
                            </div>
                            </div>

                )
                )}

            </div>
            </Fragment>
            </div>
        );


    }
    bookFor(item) {
        console.log(item);
    }
}

export default ChooseService;