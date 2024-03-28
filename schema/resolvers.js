const {UserList} = require("../fakeData.js");

const resolvers = {
    //all the resolvers we want we define here...
    Query: {
        users() {
            //all the javascript necessary, this is where we make the call to a database
            return UserList;
        }
    }
};

module.exports = {resolvers};