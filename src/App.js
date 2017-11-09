import React, { Component } from 'react';
import Table1 from './Table1';
import Table2 from './Table2';
import Table3 from './Table3';
import './App.css';

const NameColumn = () => <Table3.Column name='name' title='Name' />;

class App extends Component {
  render() {
    const data = [{
      id: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      id: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      id: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];

    const columns = [{
      name: 'name',
      title: 'Name',
    }, {
      name: 'age',
      title: 'Age',
    }, {
      name: 'address',
      title: 'Address',
    }]

    return (
      <div className="App">
        <h2>Table 1</h2>
        <Table1 columns={columns} data={data} />
        <h2>Table 2</h2>
        <Table2 data={data}>
          <Table2.Column name='name' title='Name' />
          <Table2.Column name='age' title='Age' />
          <Table2.Column name='address' title='Address' />
        </Table2>
        <h2>Table 3</h2>
        <Table3 data={data}>
          <NameColumn />
          <Table3.Column name='age' title='Age' />
          <Table3.Column name='address' title='Address' />
        </Table3>
      </div>
    );
  }
}

export default App;
