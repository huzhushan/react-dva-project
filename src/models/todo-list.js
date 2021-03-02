export default {
  namespace: 'todoList',
  state: {
    products: [{
      id: 1,
      name: 'dva'
    },{
      id: 2,
      name: 'antd'
    }]
  },
  reducers: {
    'delete'(state, { payload: id }) {
      return {
        ...state,
        products: state.products.filter(item => item.id !== id)
      };
    },
  },
}