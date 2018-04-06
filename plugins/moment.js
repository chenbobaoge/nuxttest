var moment = require('moment')


export default (app, inject) => {
        console.log(app.isClient,process.server);
  inject('moment', moment())
}
