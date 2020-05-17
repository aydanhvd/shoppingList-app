import { v4 as uuidv4 } from 'uuid';

//Actions

const ADD_USER_SETTINGS = 'ADD_USER_SETTINGS';
const ADD_LIST = 'ADD_LIST';
const TOGGLE_IS_DONDE = 'TOGGLE_IS_DONDE';
const EDIT_TO_DO = 'EDIT_TO_DO';
const DELETE_TO_DO = 'DELETE_TO_DO';
const ADD_TO_DO = 'ADD_TO_DO';

//initial State

const initialState = {
	userSettings: {
		userName: 'James Bond',
		userUri: 'https://assets-ouch.icons8.com/preview/961/ceb5fe11-ef17-4d93-880b-650c9392855f.png'
	},
	lists: [
		{
			name: 'one time List',
			id: uuidv4(),
			toDoes: [
				{
					id: uuidv4(),
					title: 'Everything for breakfast',
					items: [
						{
							id: uuidv4(),
							name: 'Milk',
							isDone: false,
							count: 2,
							unit: 'litre'
						},
						{
							id: uuidv4(),
							name: 'egg',
							isDone: false,
							count: 1,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'jam',
							isDone: true,
							count: 1,
							unit: 'pkg'
						}
					]
				},
				{
					id: uuidv4(),
					title: 'Everything for Pasta',
					items: [
						{
							id: uuidv4(),
							name: 'pasta ',
							isDone: true,
							count: 2,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Salt',
							isDone: false,
							count: 1,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Tomatoes',
							isDone: true,
							count: 1,
							unit: 'kg'
						},
						{
							id: uuidv4(),
							name: 'Cheese',
							isDone: false,
							count: 0.3,
							unit: 'kg'
						}
					]
				}
			]
		},
		{
			name: 'Regular List',
			id: uuidv4(),
			toDoes: [
				{
					id: uuidv4(),
					title: 'Back to school',
					items: [
						{
							id: uuidv4(),
							name: 'Book ',
							isDone: true,
							count: 2,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Pen',
							isDone: true,
							count: 4,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Stick paper',
							isDone: true,
							count: 1,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Highlighters',
							isDone: true,
							count: 5,
							unit: 'pkg'
						}
					]
				},
				{
					id: uuidv4(),
					title: 'Kitchen Repair',
					items: [
						{
							id: uuidv4(),
							name: 'Washing Machine ',
							isDone: false,
							count: 1,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Oven',
							isDone: true,
							count: 1,
							unit: 'pkg'
						},
						{
							id: uuidv4(),
							name: 'Microwave',
							isDone: false,
							count: 1,
							unit: 'pkg'
						}
					]
				}
			]
		}
	]
};

//Reducer

export function dataReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ADD_USER_SETTINGS:
			return {
				...state,
				userSettings: {
					userName: payload.userName,
					userUri: payload.userUri
				}
			};

		case ADD_LIST:
			return {
				...state,
				lists: state.lists.map((list) => {
					if (list.name === payload.selected) {
						return {
							...list,
							toDoes: [
								{
									id: uuidv4(),
									title: payload.title,
									isCompleate: false,
									items: []
								},
								...list.toDoes
							]
						};
					}
					return list;
				})
			};

		case EDIT_TO_DO:
			return {
				...state,
				lists: state.lists.map((list) => {
					if (list.name === payload.selected) {
						return {
							...list,
							toDoes: list.toDoes.map((todo) => {
								if (todo.title === payload.todoTitle) {
									return {
										...todo,
										items: todo.items.map((item) => {
											if (item.name === payload.itemName) {
												return {
													name: payload.itemName,
													isDone: false,
													count: payload.itemCount,
													unit: payload.itemUnit
												};
											}
											return item;
										})
									};
								}
								return todo;
							})
						};
					}
					return list;
				})
			};
		case ADD_TO_DO:
			return {
				...state,
				lists: state.lists.map((list) => {
					if (list.name === payload.selected) {
						return {
							...list,
							toDoes: list.toDoes.map((todo) => {
								if (todo.title === payload.todoTitle) {
									return {
										...todo,
										items: [
											{
												id: uuidv4(),
												name: payload.itemName,
												isDone: false,
												count: payload.itemCount,
												unit: payload.itemUnit
											},
											...todo.items,
										]
									};
								}
								return todo;
							})
						};
					}
					return list;
				})
			};

		case DELETE_TO_DO:
			return {
				...state,
				lists: state.lists.map((list) => {
					if (list.name === payload.selected) {
						return {
							...list,
							toDoes: list.toDoes.map((todo) => {
								if (todo.title === payload.todoTitle) {
									return {
										...todo.title,
										...todo.id,
										items: todo.items.filter((item) => item.name !== payload.todoName)
									};
								}
								return todo;
							})
						};
					}
					return list;
				})
			};

		case TOGGLE_IS_DONDE:
			return {
				...state,
				lists: state.lists.map((list) => {
					if (list.name === payload.selected) {
						return {
							...list,
							toDoes: list.toDoes.map((todo) => {
								if (todo.title === payload.todoTitle) {
									return {
										...todo,
										items: todo.items.map((item) => {
											if (item.name === payload.todoName) {
												//i tried to work with id but it become too complicates so i figuerd
												//'not the right way' is better than nothing :D
												return {
													...item,
													isDone: !item.isDone
												};
											}
											return item;
										})
									};
								}
								return todo;
							})
						};
					}
					return list;
				})
			};

		default:
			return state;
	}
}
//Action Creators

export const addUserSettings = (payload) => ({
	type: ADD_USER_SETTINGS,
	payload
});

export const addList = (payload) => ({
	type: ADD_LIST,
	payload
});

export const toggleIsDone = (payload) => ({
	type: TOGGLE_IS_DONDE,
	payload
});

export const editToDo = (payload) => ({
	type: EDIT_TO_DO,
	payload
});

export const deleteToDO = (payload) => ({
	type: DELETE_TO_DO,
	payload
});

export const addToDO = (payload) => ({
	type: ADD_TO_DO,
	payload
});