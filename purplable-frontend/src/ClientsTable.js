import React from 'react';
import {Table, Input, Button} from 'antd';
import Highlighter from 'react-highlight-words';
import {SearchOutlined, DeleteTwoTone} from '@ant-design/icons';
import axios from 'axios'

class ClientsTable extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      searchText: '',
      searchedColumn: '',
      data: []
    }
  };

  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
      <div style={{padding: 8}}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{width: 188, marginBottom: 8, display: 'block'}}
        />
        <Button
          type="primary"
          onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined/>}
          size="small"
          style={{width: 90, marginRight: 8}}
        >
          Search
        </Button>
        <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
          Reset
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({searchText: ''});
  };

  getData() {
    axios.get('http://localhost:3000/purplable/db-save')
      .then(response => {
          let responseData = response.data;

          // Object.keys(responseData).forEach(function (i) {
          //   responseData.key = i;
          // });

          this.setState({data: responseData});
        }
      );
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    const columns = [
      {
        title: 'Full Name',
        dataIndex: 'fullName',
        key: 'fullName',
        sorter: (a, b) => {
          let nameA = a.fullName.toLowerCase(), nameB = b.fullName.toLowerCase(),
            result;

          if (nameA < nameB) { //sort string ascending
            result = -1;
          } else if (nameA > nameB) {
            result = 1;
          } else { //default return value (no sorting)
            result = 0;
          }

          return result;
        },
        ...this.getColumnSearchProps('fullName'),
      },
      {
        title: 'ID',
        dataIndex: 'idNumber',
        key: 'idNumber',
        ...this.getColumnSearchProps('idNumber'),
      },
      {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        width: '15%',
        render: () => <DeleteTwoTone onClick={() => {
          console.log('delete')
        }}/>,
      }
    ];

    return <Table columns={columns} dataSource={this.state.data}/>;
  }
}

export default ClientsTable;
