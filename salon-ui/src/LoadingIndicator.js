import React from "react";
import {render} from "react-dom";
import ProgressBar from 'react-bootstrap/ProgressBar';

class LoadingIndicator extends React.Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProgressBar now={60} />
        )
    }
}

export default LoadingIndicator;