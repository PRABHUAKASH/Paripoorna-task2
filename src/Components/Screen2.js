import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';

const Screen1 = () => {
  const [userList, setUserList] = useState([]);

  const columns = [
    { dataField: 'id', text: 'Id', filter: textFilter() },
    { dataField: 'name', text: 'Name', sort: true, filter: textFilter() },
    {
      dataField: 'username',
      text: 'User Name',
      sort: true,
      filter: textFilter(),
    },
    { dataField: 'email', text: 'Email', sort: true, filter: textFilter() },
  ];

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h1>Screen Two</h1>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={userList}
        filter={filterFactory()}
      />
    </div>
  );
};

export default Screen1;
