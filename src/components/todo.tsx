// make a TO-DO app with React on tree different components (App, TodoList, TodoItem) and use props to pass data between them and use state to update the data:

// App.js
import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {
    const [todos, setTodos] = useState([
        {
        text: 'Learn about React',
        isCompleted: false,
        },
        {
        text: 'Meet friend for lunch',
        isCompleted: false,
        },
        {
        text: 'Build really cool todo app',
        isCompleted: false,
        },
    ]);
    
    const addTodo = (text) => {
        const newTodos = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };
    
 // add completeTodo function to update the state of the todo item when the user clicks the complete button:
    const completeTodo = (index) => {
        console.log(index)
        const newTodos = [...todos]
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };
    
  // remove todo item from the list when the user clicks the x button and update the state using useEffect:
    const removeTodo = (index) => {
       // delete todos[index] don't use slice:
        const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
        setTodos(newTodos);


    };
    
    

    
    
    return (
        <div className="app">
        <div className="todo-list">
            {todos.map((todo, index) => (
            <Todo
                key={index}
                index={index}
                todo={todo}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
            />
            ))}
            <TodoForm addTodo={addTodo} />
        </div>
        </div>
    );
    }

export default App;

// TodoList.js
import React from 'react';
import Todo from './Todo';

function TodoList({ todos, completeTodo, removeTodo }) {
    return todos.map((todo, index) => (
        <Todo
        key={index}
        index={index}
        todo={todo}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
    ));
}

export default TodoList;



// TodoItem.js
import React from 'react';

function TodoItem({ todo, index, completeTodo, removeTodo }) {
// update the style of the todo item when the user clicks the complete button (line-through and )

    return (
        <div
        className="todo"

            style={{textDecoration: todo.isCompleted ? 'line-through' : ''},{backgroundColor: todo.isCompleted ? 'green' : ''}}
        >
        {todo.text}
        <div>
            <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>x</button>
        </div>
        </div>
    );

}

export default TodoItem;

// TodoForm.js

import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            className="input"
            value={value}
            placeholder="Add Todo..."
            onChange={(e) => setValue(e.target.value)}
        />
        </form>
    );
}

export default TodoForm;

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { log } from 'console';

ReactDOM.render(<App />, document.getElementById('root'));

// index.css

body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.app {
    width: 100%;
    max-width: 500px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    padding: 36px;
    text-align: center;
}

.todo-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    border-bottom: 1px solid #eee;
}

.todo button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.2s;
}

.todo button:hover {
    color: #ff0000;
}

.todo button.complete {
    color: #22ee22;
}

.input {
    width: 100%;
    padding: 12px 24px;
    border: 1px solid #eee;
    border-radius: 4px;
    margin-bottom: 12px;
}

.singleTodoItem {
  font-family: "Arial";
  align-items: center;
  background: #fff;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 3px 10px;
}

.isCompleteItem {
  font-family: "Arial";
  align-items: center;
  background: rgb(0, 255, 34);
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 3px 10px;
  text-decoration: line-through;
}




// q: What is a Sprint planning and who organizes them typically?
// a: Sprint planning is a meeting where the team discusses the work to be done in the upcoming sprint. 
// The team decides which user stories they will work on and how much time they will spend on each story. 
// The team also decides how they will break down the stories into tasks. The Scrum Master and Product Owner typically organize sprint planning meetings.

// q: what happen if I update the refs in the useEffect?

// a: The useEffect hook will run after every render, so if you update the refs in the useEffect hook, you will get an infinite loop.

// bash command to create a new file in the current directory:
touch index.js

// what is git reflog?
// a: The git reflog command shows a log of the commits that you have made in the current branch.

// String Challenge
// Have the function StringChallenge(str) take the str parameter being passed and determine if it passes as a valid password that follows the list of constraints:

// 1. It must have a capital letter.
// 2. It must contain at least one number.
// 3. It must contain a punctuation mark or mathematical symbol.
// 4. It cannot have the word "password" in the string.
// 5. It must be longer than 7 characters and shorter than 31 characters.

// If all the above constraints are met within the string, the your program should return the string true, otherwise your program should return the string false. For example: if str is "apple!M7" then your program should return "true".

// Examples Input: "passWord123!" Output: false Input: "turkey90AAA=" Output: true 

function StringChallenge(str) {
    // code goes here  
    let regex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,30})(?!.*password).*$/
    return regex.test(str);
}

// keep this function call here
console.log(StringChallenge(readline()));

// q: How should the ticket estimates be done?
// a: The team should estimate the tickets based on the complexity of the ticket. The team should not estimate the tickets based on the time it will take to complete the ticket.

// q: What does velocity refer to in the context of a Sprint?
// a: Velocity refers to the amount of work that the team can complete in a sprint. The team can use velocity to predict how much work they can complete in future sprints.

// q: What does a successful Sprint look like?
// a: A successful sprint is one where the team completes all of the work that they committed to in the sprint planning meeting.

// q: What is the role of the Scrum master?
// a: The Scrum master is responsible for ensuring that the team follows the Scrum framework. The Scrum master also helps the team to remove any impediments that are preventing the team from completing their work.


// Front-end Challenge
// We provided some simple React template code. Your goal is to modify the application so that when you click the toggle button, the favorite programming language toggles between the items in the languages array. The default value should be the first item in the array.

// You must use the Context API for this challenge, which means you have to use the React.createContext and Context.Provider functions. You are free to add classes and styles, but make sure you leave the element ID's as they are.

// Submit your code once it is complete and our system will validate your output.

import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';

const LanguageContext = React.createContext();

function App() {
    const [language, setLanguage] = useState('JavaScript');
    
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
        <div className="app">
            <h1>Favorite Language</h1>
            <Toggle />
            <Display />
        </div>
        </LanguageContext.Provider>
    );
    }

function Toggle() {
    const { language, setLanguage } = useContext(LanguageContext);
    const languages = ['JavaScript', 'Python', 'Ruby', 'Java'];
    const index = languages.indexOf(language);
    const nextLanguage = languages[(index + 1) % languages.length];
    return (
        <button onClick={() => setLanguage(nextLanguage)}>
        Toggle ({language})
        </button>
    );
}

function Display() {
    const { language } = useContext(LanguageContext);
    return <div className="display">Your favorite language is: {language}
    </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));

// Array Challenge
// Have the function ArrayChallenge(strArr) take strArr which will be an an array consisting of the following elements: N which will be the number of gas stations in a circular route and each subsequent element will be the string g:c where g is the amount of gas in gallons at that gas station and c will be the amount of gallons of gas needed to get to the following gas station.

// For example strArr may be: ["4","3:1","2:2","1:2","0:1"]. Your goal is to return the index of the starting gas station that will allow you to travel around the whole route once, otherwise return the string impossible. For the example above, there are 4 gas stations, and your program should return the string 1 because starting at station 1 you receive 3 gallons of gas and spend 1 getting to the next station. Then you have 2 gallons + 2 more at the next station and you spend 2 so you have 2 gallons when you get to the 3rd station. You then have 3 but you spend 2 getting to the final station, and at the final station you receive 0 gallons and you spend your final gallon getting to your starting point. Starting at any other gas station would make getting around the route impossible, so the answer is 1. If there are multiple gas stations that are possible to start at, return the smallest index (of the gas station). N will be >= 2.

// Examples Input: ["4","1:1","2:2","1:2","0:1"] Output: 4 Input: ["4","0:1","2:2","1:2","3:1"] Output: 1

function ArrayChallenge(strArr) {
    // code goes here  
    let n = strArr[0];
    let gas = 0;
    let index = 0;
    for (let i = 1; i <= n; i++) {
        let [g, c] = strArr[i].split(':');
        gas += Number(g) - Number(c);
        if (gas < 0) {
            gas = 0;
            index = i;
        }
    }
    return gas > 0 ? index + 1 : 'impossible';
}

// keep this function call here
console.log(ArrayChallenge(readline()));

// how create a ssh key on mac in .ssh folder?
// a: ssh-keygen -t rsa -b 4096 -C

// how add ssh key to gitlab?
// a: gitlab.com -> profile settings -> SSH Keys -> Add SSH Key -> copy the public key from the .ssh folder -> paste the public key in the gitlab -> click add key

// how create a ssh key on mac in .ssh folder?


