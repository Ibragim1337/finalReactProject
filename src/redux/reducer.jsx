import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // здесь мы создаем редюсоры
    // Редюсер для добавления задач
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //Редюсер для удаления задачи
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //редактирование задачи
    updateTodos: (state, action) => {
      return state.map( todo => {
        if(todo.id === action.payload.id){
          return {
            ...todo,
            item: action.payload.item,
          }
        }
        return todo;
      });
    },
    //проверка на выполненность 
    completeTodos: (state, action) => {
      return state.map( todo => {
        if(todo.id === action.payload){
          return {
            ...todo,
            completed: true,
          }
        }
        return todo;
      });
    }
  },
});

export const {addTodos,removeTodos, updateTodos, completeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;