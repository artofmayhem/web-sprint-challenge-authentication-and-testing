const db = require('../../../data/dbConfig');

function find() {
    return db('users as u')
        .select('*')
}

function findByUserName(userName) {
    return db('users as u')
        .select('*')
        .where('u.username', userName)
        
}

function findById(id) {
    return db('users as u')
        .select('*')
        .where('u.id', id)
}

function create(newUser) {
    const [id] = db('users as u')
        .insert(newUser)
        return findById(id)
}


module.exports = {
    find: find,
    findByUserName: findByUserName,
    findById: findById,
    create: create
}