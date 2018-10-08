import React from 'react';

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <div>customer component</div>
        );
    }
}


export default Customer;
