import React, {Fragment} from "react";
import Alert from 'react-bootstrap/Alert';
import {appNotification} from './app-notification';

class AppNotificationComponent extends React.Component {


    constructor(props) {
        super(props);
        this.state =  {
            show: false,
            title: '',
            variant: '',
            message: ''
        };
    }

    componentDidMount() {
        this.subscription = appNotification.onChange().subscribe(res => {
            this.setState({
                show: true,
                title: res.title,
                variant: res.variant,
                message: res.message
            });
            this.resetAfterTenSeconds();
        })
    }

     componentWillUnmount() {
            this.subscription.unsubscribe();
     }

     reset() {

             this.setState({
                 "show": false,
                 "title": '',
                 "variant": '',
                 "message": '',
             });
         }

     resetAfterTenSeconds() {
        setTimeout(() => {
            this.reset();
        }, 10000);
     }

    render() {
        const {show, title, message, variant} = this.state;

        return <Fragment>
                {show === true && <div className="message-container ">
                    <div className="container">
                        <Alert variant={variant} onClose={() => this.reset()} dismissible>
                            <Alert.Heading>{title}</Alert.Heading>
                            <p>
                                {message}
                            </p>
                        </Alert>
                        </div>

                    </div>

                }
                </Fragment>

    }
}

export default AppNotificationComponent;