import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    componentDidMount() {
        axios.get('/api/category')
            .then(res => this.setState({ data: res.data }))
            .catch(err => console.log(`Err: ${err}`));
    }

    render() {
        const categories = this.state.data
            .slice() // a copy so we don't mutate the original data
            .sort((a,b) => a.CategoryID <= b.CategoryID ? -1 : 1)
            .map(category => {
                return (
                    <tr key={category.CategoryID}>
                        <td>{category.CategoryID}</td>
                        <td>{category.CategoryName}</td>
                        <td>{category.Description}</td>
                    </tr>
                )
            });

        return (
            <Table bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {categories}
                </tbody>
            </Table>
        );
    }
}


export default Category;
