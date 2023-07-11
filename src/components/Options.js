import React ,{useState} from 'react'
 
const Options = () => {
  
  const [selectedRow, setSelectedRow] = useState(null);
  const tableData = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Alice', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
  ];

  const handleRowClick = (rowId) => {
    setSelectedRow(rowId);
  };
 
 
  return (
    <div>
    <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((item) => (
        <tr
          key={item.id}
          onClick={() => handleRowClick(item.id)}
          className={selectedRow === item.id ? 'locked' : ''}
        >
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>
  )
}

export default Options