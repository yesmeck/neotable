import React from 'react';

const Column = () => {};

export default class Table extends React.Component {
  static Column = Column;

  render() {
    const { children, data } = this.props;

    this.columns = React.Children.map(children, (child) => ({
      name: child.props.name,
      title: child.props.title,
    }))

    return (
      <table>
        <thead>
          <tr>
            {this.columns.map(col =>
              <th key={col.name}>{col.title}</th>
            )}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              {this.columns.map(col =>
                <td key={col.name}>{item[col.name]}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
