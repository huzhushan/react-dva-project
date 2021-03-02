import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const TodoList = ({ dispatch, products }) => {
  const onDelete = id => {
    dispatch({
      type: 'todoList/delete',
      payload: id,
    });
  }
  const columns = [{
    title: 'Name',
    dataIndex: 'name',
  }, {
    title: 'Actions',
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <Table
      dataSource={products}
      columns={columns}
      rowKey="id"
    />
  );
};

TodoList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

const stateToProps = ({todoList}) => ({
  products: todoList.products
})

export default connect(stateToProps)(TodoList); 