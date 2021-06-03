import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "../action/todoType";

const initialState = {
  list: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      console.log("from reducers : ", id, data);
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_TODO:
      console.log(action.id);
      const newList = state.list.filter((list) => list.id !== action.id);
      console.log(newList);
      return {
        ...state,
        list: newList,
      };

    case REMOVE_TODO:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default todoReducer;
