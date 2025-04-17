import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../components/todo/todoSlice';

function TodoList() {
    const todos = useSelector(state => state.todo);
    const dispatch = useDispatch();
    const [input, setInput] = useState('');

    const handleAdd = () => {
        const trimmedText = input.trim();
        if (trimmedText) {
            dispatch(addTodo(trimmedText));
            setInput('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleAdd();
    };

    return (
        <div className="p-4 max-w-md mx-auto border">
            <h1 className="text-2xl font-bold mb-4">📋 To-do List</h1>
            <div className="flex gap-2 mb-4">
                <input
                    className="flex-1 border rounded px-2 py-1"
                    type="text"
                    value={input}
                    placeholder="Nhập công việc..."
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                />
                <button
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                    onClick={handleAdd}
                >
                    Thêm
                </button>
            </div>

            {todos.length === 0 ? (
                <p className="text-gray-500">Chưa có công việc nào!</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className={`flex justify-between items-center mb-2 p-2 rounded border ${todo.completed ? 'bg-green-100 line-through' : ''
                                }`}
                        >
                            <span
                                onClick={() => dispatch(toggleTodo(todo.id))}
                                className="cursor-pointer flex-1"
                            >
                                {todo.text}
                            </span>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-red-500 hover:text-red-700 ml-2"
                            >
                                Xoá
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TodoList;
