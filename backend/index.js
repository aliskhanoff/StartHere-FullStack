const fastify = require('fastify')
const fileUpload = require('fastify-file-upload')
const path = require('path')

const fastifyStatic = require('fastify-static')

fastify.register(require('fastify-jwt'), {
  secret: process.env.SECRET
})

.register(fastifyStatic, {
  root: path.join(__dirname, '/public'),
  prefix: '/', // optional: default '/'
})

.post('/signin', (req, res) => {
  res.send({ token: fastify.jwt.sign({ name: 'Ramazan' }) })
})

fastify.get('/', (req, reply) => reply.redirect('/index.html')) // serving path.join(__dirname, 'public', 'myHtml.html') directly

.listen(process.env.PORT, () =>console.log("SERVER STARTED ON PORT " + process.env.PORT))