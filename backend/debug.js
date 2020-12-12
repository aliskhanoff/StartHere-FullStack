const fastify           = require('fastify')({ logger: true })
const fastifyStatic     = require('fastify-static')
const fastifyFileUpload = require('fastify-file-upload')
const path              = require('path')

fastify

.register(require('fastify-jwt'), {
  secret: process.env.SECRET
})

.register(fastifyFileUpload)

.register(fastifyStatic, {
  root: path.join(__dirname, '/public'),
  prefix: '/', // optional: default '/'
})

.addHook("onRequest", async (request, reply) => {
  try {
    await request.jwtVerify()
  } catch (err) {
    reply.send(err)
  }
})

.post('/login', async (req, res) => {
  res.send({ token: fastify.jwt.sign({ name: req.body?.name, email: req.body?.email}) })
})

.get('/profile', async (req, res) => {
  res.send(req.user)
})

.get('/', async (req, reply) => reply.redirect('/index.html')) // serving path.join(__dirname, 'public', 'myHtml.html') directly

.listen(process.env.PORT, () =>console.log("SERVER STARTED ON PORT ", process.env.PORT, " process.env.SECRET ", process.env.SECRET))