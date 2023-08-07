const setUser = () => {
	return {
		type: "SET_USER",
	};
};

const getUser = () => {
	return {
		type: "GET_USER",
	};
};

export const userActions = {
	setUser,
	getUser,
};
