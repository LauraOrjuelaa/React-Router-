
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    description: "",
    creationDate: "",
    todos: [],
}

export const todoSlice = createSlice({
    name: "todos", 
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const { title, description, creationDate } = action.payload;
            state.title = title;
            state.description = description;
            state.creationDate = creationDate;
            state.todos.push(action.payload);
        },

        deleteTodo: (state, action) => {
            state.title = action.payload;
            state.description = action.payload;
            state.creationDate = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
