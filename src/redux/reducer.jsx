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
  },
});

export const {addTodos,removeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;