const db = require('../data/db-config');

function find() {
	return db('schemes')
		.select();
}

function findById(id) {
	return db('schemes')
		.where({ id })
		.first();
};

function findSteps(id) {
	return db('steps as st')
		.join('schemes as s', 's.id', 'st.scheme_id')
		.where({ scheme_id:id })
		.select('st.id', 's.scheme_name', 'st.step_number', 'st.instructions')
		.orderBy('st.step_number', 'asc')
};


module.exports = {
	find,
	findById,
	findSteps
};
