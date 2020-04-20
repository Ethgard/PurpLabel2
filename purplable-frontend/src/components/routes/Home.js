import React, {Component} from 'react';
import ClientDetailsForm from "../../ClientDetailsForm"
import ClientsTable from "../../ClientsTable"

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
    }

    componentDidMount() {
        const data = JSON.parse(sessionStorage.getItem('userData'));
        if (!data) {
            this.props.history.push('/login')
        }
        else {
            console.log(data.data.Name);
            console.log(data.Name);
            this.setState({name: data.data.Name})
        }
    }

    render() {
        return (
            <div className="Home">
                <ClientDetailsForm/>
                <ClientsTable/>
            </div>
        );
    }
}

export default Home;
