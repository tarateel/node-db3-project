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

async function add(scheme) {
	const [id] = await db('schemes').insert(scheme)
	return db('schemes')
		.where({ id })
		.first()
};

async function update(changes, id) {
	await db('schemes')
		.where({ id })
		.update(changes)
	
		return findById(id)
};

function remove(id) {
	return db('schemes')
		.where({ id })
		.select()
		.then(scheme => {
			if (!scheme) {
				return null
			} else {
				return db('schemes')
					.where({ id })
					.del()
					.then(() => {
						return scheme;
					})
			}
		})
};

module.exports = {
	find,
	findById,
	findSteps,
	add,
	update,
	remove
};
