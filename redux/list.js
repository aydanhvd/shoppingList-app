import { v4 as uuidv4 } from 'uuid'; //find another packge for ides
import { LISTS_TYPES } from '../untils';
import { SET_APP_DATA } from '../untils/storeDataAS';

//seters
export const MODULE_NAME = 'lists';
export const selectListByType = (state, type) => state[MODULE_NAME][type];
export const selectSingleListByID = (state, type, ID) => selectListByType(state, type).find((list) => list.id === ID);

//Action types
const ADD_LIST = "ADD_LIST"
const RESET_LIST = "RESET_LIST"
const DELETE_LIST = "DELETE_LIST"
const ADD_PRODUCT = 'ADD_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const TOGGLE_PRODUCT_ISDONE = 'TOGGLE_PRODUCT_ISDONE';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

//state
const initialState = {
	[LISTS_TYPES.ONE_TIME]: [],
	[LISTS_TYPES.REGULAR]: []
};
//Reducer

export function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case SET_APP_DATA:
      return {
			...state,
			...payload.lists
		};
		case ADD_LIST:
			return{
				...state,
				[payload.listType]:[
					{
						id:payload.listID,
						name:payload.listName,
						products:[],
					},
					...state[payload.listType],
				]
			}
			case DELETE_LIST:
			return{
				...state,
				[payload.listType]: state[payload.listType].filter(
					list => list.id !== payload.listID
				)
			}
		case RESET_LIST:
      return {
         ...state,
         [payload.listType]: state[payload.listType].map((list) => {
            if (list.id === payload.listID) {
               return {
						...list,
						products: list.products.map((product) => ({
							...product,
							isDone: false,
						})),
            };
            }
            return list;
         }),
      };
		case UPDATE_PRODUCT:
			return {
				...state,
				[payload.listType]: state[payload.listType].map((list) => {
					if (list.id === payload.listID) {
						return {
							...list,
							products: list.products.map((product) => {
								if (product.id === payload.product?.id) {
									return {
										...product,
										name: payload.product?.name,
										count: payload.product?.count,
										unit: payload.product?.unit,	
									};
								}
								return product;
							})
						};
					}
					return list;
				})
			};
		case TOGGLE_PRODUCT_ISDONE:
			return {
				...state,
				[payload.listType]: state[payload.listType].map((list) => {
					if (list.id === payload.listID) {
						return {
							...list,
							products: list.products.map((product) => {
								if (product.id === payload.productID) {
									return {
										...product,
										isDone: !product.isDone
									};
								}
								return product;
							})
						};
					}
					return list;
				})
			};
		case DELETE_PRODUCT:
			return {
				...state,
				[payload.listType]: state[payload.listType].map((list) => {
					if (list.id === payload.listID) {
						return {
							...list,
							products: list.products.filter(
								(product) => product.id !== payload.productID
							),
						};
					}
					return list;
				})
			};
		case ADD_PRODUCT:
			return {
				...state,
				[payload.listType]: state[payload.listType].map((list) => {
					if (list.id === payload.listID) {
						return {
							...list,
							products: [{
								id: genID(),
								name: payload.product?.name,
								isDone: false,
								count: payload.product?.count,
								unit: payload.product?.unit,								
							},
							...list.products
						]};
					}
					return list;
				})
			};
		default:
			return state;
	}
}

//Action Creators
export const addList= (payload) => ({
	type: ADD_LIST,
	payload
});
export const deleteList= (payload) => ({
	type: DELETE_LIST,
	payload
});
export const toggleIsDone = (payload) => ({
	type: TOGGLE_PRODUCT_ISDONE,
	payload
});
export const deleteProduct= (payload) => ({
	type: DELETE_PRODUCT,
	payload
});
export const addProduct= (payload) => ({
	type: ADD_PRODUCT,
	payload
});
export const updateProduct= (payload) => ({
	type: UPDATE_PRODUCT,
	payload
});
export const resetList= (payload) => ({
	type: RESET_LIST,
	payload
});

export function genID() {
	return `${Date.now()}${Math.random()}`;
}
