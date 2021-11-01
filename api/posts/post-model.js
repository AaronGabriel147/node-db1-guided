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
  // UPDATE posts SET title='foo', contents='bar' WHERE id=17;
  await db('posts').update(post).where('id', id)
  return getById(id)
}

async function remove(id) {
  const result = await db('posts').del().where('id', id)
  console.log(result)
  // how do we return the deleted record??????
  return result // just an integer!
}
