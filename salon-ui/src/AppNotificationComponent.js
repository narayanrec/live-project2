import React from "react";
import {render} from "react-dom";
import Alert from 'react-bootstrap/Alert'

class AppNotificationComponent extends React.Component {


    constructor(props) {
        super(props);
        this.type = 'success';
    }

    render() {
        if(this.type === 'success') {
            return (
                <Alert key='success11' variant='success'>
                    Request processed successfully
                </Alert>
            )
        } else {
            return (
                        <Alert key='failure11' variant='danger'>
                            There was an error processing your request. Please try after some time.
                        </Alert>
                    )
        }

    }
}

export default AppNotificationComponent;