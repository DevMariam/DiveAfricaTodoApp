import React, { useState } from 'react';
import styled from 'styled-components';
import bgImage from './background.jpg'; // Add an image in your src folder

const Container = styled.div`
	width: 100%;
	max-width: 450px;
	margin: 80px auto;
	padding: 25px;
	background: white;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
	border-radius: 12px;
	font-family: 'Poppins', sans-serif;
	text-align: center;
`;

const Title = styled.h2`
	font-size: 26px;
	color: #333;
	font-weight: 600;
	margin-bottom: 20px;
`;

const InputContainer = styled.div`
	display: flex;
	gap: 10px;
	align-items: center;
`;

const Input = styled.input`
	flex: 1;
	padding: 12px;
	border: none;
	font-size: 16px;
	border-radius: 8px;
	background: url(${bgImage}) no-repeat center;
	background-size: cover;
	color: white;
	font-weight: 500;
	text-align: center;
	outline: none;

	&::placeholder {
		color: rgba(255, 255, 255, 0.8);
	}
`;

const Button = styled.button`
	padding: 12px 16px;
	border: none;
	background: linear-gradient(45deg, #007bff, #0056b3);
	color: white;
	font-size: 16px;
	font-weight: bold;
	border-radius: 8px;
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		background: linear-gradient(45deg, #0056b3, #003d82);
	}
`;

const List = styled.ul`
	list-style: none;
	padding: 0;
	margin-top: 20px;
`;

const ListItem = styled.li`
	background: #f3f3f3;
	padding: 12px;
	margin-bottom: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	font-size: 16px;
	font-weight: 500;
	color: #444;
	transition: 0.3s ease;

	&:hover {
		background: #e0e0e0;
	}
`;

const DeleteButton = styled.button`
	background: crimson;
	color: white;
	border: none;
	padding: 6px 12px;
	border-radius: 5px;
	cursor: pointer;
	transition: 0.3s ease;

	&:hover {
		background: #9a0c0c;
	}
`;

const TodoApp = () => {
	const [task, setTask] = useState('');
	const [tasks, setTasks] = useState([]);

	const addTask = () => {
		if (task.trim() !== '') {
			setTasks([...tasks, task]);
			setTask('');
		}
	};

	const removeTask = (index) => {
		setTasks(tasks.filter((_, i) => i !== index));
	};

	return (
		<Container>
			<Title>📌 My To-Do List</Title>
			<InputContainer>
				<Input
					type='text'
					value={task}
					onChange={(e) => setTask(e.target.value)}
					placeholder='Enter a task...'
				/>
				<Button onClick={addTask}>Add</Button>
			</InputContainer>
			<List>
				{tasks.map((task, index) => (
					<ListItem key={index}>
						{task}
						<DeleteButton onClick={() => removeTask(index)}>❌</DeleteButton>
					</ListItem>
				))}
			</List>
		</Container>
	);
};

export default TodoApp;
