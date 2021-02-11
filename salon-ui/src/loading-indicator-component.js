import React, {Fragment} from "react";
import {loadingIndicator} from './loading-indicator';
import ProgressBar from 'react-bootstrap/ProgressBar';

class LoadingIndicatorComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            "showLoading" : false
        };
    }

    componentDidMount() {
        this.subscription = loadingIndicator.onChange().subscribe(value => {
            this.setState({
                "showLoading" : value
            })
        })
    }

    componentWillUnmount() {
        this.subscription.unsubscribe();
    }

    render() {
        const {showLoading} = this.state

        return ( <Fragment>
            { showLoading && <ProgressBar now={100} />}
            </Fragment>
        )
    }
}

export default LoadingIndicatorComponent;