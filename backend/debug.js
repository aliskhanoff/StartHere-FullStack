const fastify = require('fastify')({ logger: true })
const path = require('path')

const fastifyStatic = require('fastify-static')

fastify.register(fastifyStatic, {
  root: path.join(__dirname, '/public'),
  prefix: '/', // optional: default '/'
})

fastify.get('/', (req, reply) => reply.redirect('/index.html')) // serving path.join(__dirname, 'public', 'myHtml.html') directly

.listen(process.env.PORT, () =>console.log("SERVER STARTED ON PORT " + process.env.PORT))