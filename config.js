var config = {
    default: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://kramanager:kramanager@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: 'managerkra@gmail.com',
            pass: 'latitudee5470'
        },
        serverUrl: 'http://localhost:3000', 
    },
    development: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://kramanager:kramanager@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: 'managerkra@gmail.com',
            pass: 'latitudee5470'
        },
        serverUrl: 'http://localhost:3000'
    },
    production: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://kramanager:kramanager@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: 'managerkra@gmail.com',
            pass: 'latitudee5470'
        },
        serverUrl: 'https://kramanager.herokuapp.com'
    }
}

exports.get = function get(env) {
    return config[env] || config.default;
  }