import React, {Fragment} from "react";
import {loadingIndicator} from './loading-indicator.js';
import {appNotification} from './app-notification.js';
import {withRouter} from "react-router";

class ChooseSlot extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            "serviceId": this.props.match.params.serviceId,
            "serviceName": this.props.match.params.serviceName,
            lookupDate: '2021-09-24',
            items: []
        }
    }



    setDate(dateVal) {
        this.setState({lookupDate: dateVal});
    }

    showSlotsOnDate(event) {
        event.preventDefault();
        const {serviceId, lookupDate} = this.state;
        loadingIndicator.show();
        fetch("http://localhost:8080/api/services/retrieveAvailableSlots/" + serviceId + "/" + lookupDate)
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
        const {lookupDate, serviceName, items} = this.state;
        return (
        <div>
            <div className="row">
                <div className="col-4"><strong>Choose a Date for {serviceName}</strong></div>
                <div className="col-5"> <input  className="form-control form-control-lg"
                                                type="date"
                                                value={lookupDate}
                                                onChange={(evt)=>this.setDate(evt.target.value)} /> </div>
                <div className="col-3"> <button type="submit" className="btn btn-primary mb-2" onClick={(evt) => this.showSlotsOnDate()} >Show Slots</button></div>
            </div>

            <Fragment>
            {items.length > 0 && <h4 className="pt-5">Available Slots on {lookupDate} <br/> </h4>}
            <div className="card-deck text-center">

                {items.map((item, i )=> (
                            <div className="col-sm-4">
                            <div key = {i} className="card ">
                                <div className="card-header"><h4>{serviceName}</h4></div>
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

export default withRouter(ChooseSlot);