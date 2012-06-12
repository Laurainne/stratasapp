var strata = require("strata");

strata.run(function (env, callback) {
    var headers = {
        "Content-Type": "text/plain",
        "Content-Length": "12"
    };

    callback(200, headers, "Hello world!");
});