var config = {
    default: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: process.env.NM_USERNAME,
            pass: process.env.NM_PASSWORD
        },
        serverUrl: 'http://localhost:3000',
    },
    development: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: process.env.NM_USERNAME,
            pass: process.env.NM_PASSWORD
        },
        serverUrl: 'http://localhost:3000'
    },
    production: {
        mlab: {
            defaultDatabase: "kramanager",
            defaultCollection: "projects",
            defaultUri: "mongodb://" + process.env.DB_USERNAME + ":" + process.env.DB_PASSWORD + "@ds129428.mlab.com:29428/kramanager"
        },
        nodemailer: {
            user: process.env.NM_USERNAME,
            pass: process.env.NM_PASSWORD
        },
        serverUrl: 'https://kramanager.herokuapp.com'
    }
}

exports.get = function get(env) {
    return config[env] || config.default;
}