var config = {
    default: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://kramanager:kramanager@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: 'nagarrobirthdaytracker@gmail.com',
            pass: 'btapp2017'
        },
        serverUrl: 'http://localhost:3000', 
    },
    development: {
        mlab: {
            defaultDatabase: "btapp",
            defaultCollection: "employees",
            defaultUri: "mongodb://dbuser:qwertyuiop@ds139436.mlab.com:39436/btapp"
        },
        nodemailer: {
            user: 'nagarrobirthdaytracker@gmail.com',
            pass: 'btapp2017'
        },
        serverUrl: 'http://localhost:3000'
    },
    production: {
        mlab: {
            defaultDatabase: "btapp",
            defaultCollection: "employees",
            defaultUri: "mongodb://dbuser:qwertyuiop@ds139436.mlab.com:39436/btapp"
        },
        nodemailer: {
            user: 'nagarrobirthdaytracker@gmail.com',
            pass: 'btapp2017'
        },
        serverUrl: 'https://birthdaytracker.herokuapp.com'
    }
}

exports.get = function get(env) {
    return config[env] || config.default;
  }