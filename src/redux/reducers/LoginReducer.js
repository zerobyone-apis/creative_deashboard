const initialState = {
	user: null,
};

export const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_USER":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT_USER":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};
