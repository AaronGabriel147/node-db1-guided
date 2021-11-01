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
  // const result = await db.raw(`SELECT * FROM posts WHERE id = ${id}`) // bad!!!
  const result = await db('posts').where('id', id).first()
  console.log(result)
  return result
}

async function create(newPost) {
  const [id] = await db('posts').insert(newPost)
  const post = await getById(id) // not necessary in Postgres
  return post
}

async function update(id, post) {
  // UPDATE posts SET 
  await db('posts').update(post).where('id', id)
  return getById(id)
}

async function remove() {
  return 'delete wired'
}
