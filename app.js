var strata = require("strata");

strata.use(strata.commonLogger);
strata.use(strata.contentType, "text/plain");
strata.use(strata.contentLength);

strata.get("/", function (env, callback) {
    callback(200, {}, "Hello world!");
});

strata.run();