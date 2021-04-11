import './table.css';

const Table = ():JSX.Element => {
  return(
    <table tabIndex={0}>
      <caption>this is a tutorial on accessibility</caption>
      <thead>
        <tr>
          <th scope='col' tabIndex={0}>item</th>
          <th scope='col' tabIndex={0}>purchased</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1619</th>
          <td>true</td>
        </tr>
        <tr>
          <th scope='row'>new heights</th>
          <td>false</td>
        </tr>
      </tbody>
    </table>
  )
}
export default Table;