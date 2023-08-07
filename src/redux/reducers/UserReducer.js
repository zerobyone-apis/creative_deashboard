export const UserReducer = (state = {}, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.payload,
			};
		default:
			return state;
	}
};
