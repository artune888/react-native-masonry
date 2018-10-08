export const resolveImage = (data) => {
	return {
		...data,
		//@TODO: Consider consolidating data.uri with dimensions to a image object
		dimensions: {
			width: 400,
			height: 300,
		}
	};
};
