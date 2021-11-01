const db = require('../../data/db-config.js')

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // SELECT * FROM posts;
  // const result = await db.select('*').from('posts')
  // const result = await db.raw('SELECT * FROM posts;')
  const result = await db('posts')
  console.log(result)
  return result
}

async function getById(id) {
  // const result = await db('posts').where('id', '=', id)
  // const result = await db('posts').where({ id })
  // const result = await db('posts').where('id', id).first()
  const result = await db.raw(`SELECT * FROM posts WHERE id = ${id}`)
  console.log(result)
  return result
}

async function create() {
  return 'create wired'
}

async function update() {
  return 'update wired'
}

async function remove() {
  return 'delete wired'
}
