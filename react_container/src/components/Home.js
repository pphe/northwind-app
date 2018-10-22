import React from 'react';
import { Panel } from 'react-bootstrap';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <div>
                <Panel>
                    <Panel.Body>Northwind Traders is a sample
                    database that shipped with the Microsoft Office suite.
                    The Northwind database contains the sales data for
                    a fictitious company called Northwind Traders,
                    which imports and exports specialty foods from 
                    around the world.</Panel.Body>
                </Panel>
            </div>
        );
    }
}


export default Home;
