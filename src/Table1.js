import React from 'react';

export default class Table extends React.Component {
  render() {
    const { columns, data } = this.props;

    return (
      <table>
        <thead>
          <tr>
            {columns.map(col =>
              <th key={col.name}>{col.title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {columns.map(col =>
                <td key={col.name}>{item[col.name]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
