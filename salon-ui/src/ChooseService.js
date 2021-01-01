import React, {Fragment} from "react";
import {loadingIndicator} from './loading-indicator.js';

class ChooseService extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        loadingIndicator.show();
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

            }
        )
    }

    render() {
        const {items} = this.state;

        return (
            <Fragment>
            <div class="card-deck text-center">

                {items.map((item, i )=> (
                            <div class="col-sm-4">
                            <div key = {i} class="card ">
                                <div class="card-header"><h4>{item.name}</h4></div>
                                <div class="card-body">
                                  <h5 class="card-title">${item.price}</h5>
                                  <p class="card-text">
                                    {item.description}< br/>
                                    {item.timeInMinutes} Minutes
                                  </p>
                                  <button type="button" onClick= {(evt) => this.bookFor(item)}class="btn btn-primary">Book Now</button>
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
        console.log(item);
    }
}

export default ChooseService;