import dva from 'dva';
import './index.css';

import TodoListModel from './models/todo-list';
import router from './router'

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(TodoListModel);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');
