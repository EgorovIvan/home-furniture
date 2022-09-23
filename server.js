// const express = require('express')
// const config = require('config')
// const mongoose = require('mongoose')
//
// const app = express()
//
// app.use('/api/auth', require('./routes/auth.routes'))
//
// const PORT = config.get('port') || 4000
//
// async function start() {
//     try {
//         await mongoose.connect(config.get('mongoUrl'), {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         })
//
//         app.listen(PORT, () => console.log(`Server is running on: ${PORT}...`))
//     } catch (e) {
//         console.log('Server Error', e.message)
//         process.exit(1)
//     }
// }
// start()
//

