import React, { useState, useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import { Table } from 'react-bootstrap';

const Screen1 = () => {
  const [userList, setUserList] = useState([]);
  const [userSearchData, setUserSearchData] = useState([]);
  const [name, setName] = useState('');

  const columns = [
    { dataField: 'id', text: 'Id', filter: textFilter() },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'username',
      text: 'User Name',
      sort: true,
      filter: textFilter(),
    },
    { dataField: 'email', text: 'Email', sort: true, filter: textFilter() },
    { dataField: 'phone', text: 'Phone', sort: true, filter: textFilter() },
    {
      dataField: 'address.city',
      text: 'Address',
      sort: true,
      filter: textFilter(),
    },
  ];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 5,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
  });
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((result) => setUserList(result))
      .catch((error) => console.log(error));
  }, []);

  const handleSearch = () => {
    const newData = userList.filter((x) => x.name == name);
    setUserList(newData);
    setUserSearchData(newData);
  };

  return (
    <div>
      <h1>Screen One</h1>
      <Table>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Search.."
              onChange={(e) => setName(e.target.value)}
            />
          </td>
          <td>
            <button onClick={() => handleSearch()}>Seach</button>
          </td>
        </tr>
      </Table>
      <BootstrapTable
        bootstrap4
        keyField="id"
        columns={columns}
        data={userList}
        pagination={pagination}
        filter={filterFactory()}
      />
    </div>
  );
};

export default Screen1;
