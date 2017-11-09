import React from 'react';
import { unstable_createReturn, unstable_createCall } from 'react-call-return';

const Column = (props) => unstable_createReturn(props);

export default class Table extends React.Component {
  static Column = Column;

  render() {
    const { children, data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {unstable_createCall(children, (props, columns) => (
              columns.map(col => (
                <th key={col.name}>{col.title}</th>
              ))
            ), this.props)}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {unstable_createCall(children, (props, columns) => (
                columns.map(col => (
                  <td key={col.name}>{item[col.name]}</td>
                ))
              ), this.props)}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
