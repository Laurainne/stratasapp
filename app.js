var strata =require('strata');
var inspect = require('util').inspect;

var db = {
	tim: "noderocks",
	lauren:"michelle"
}
strata.use(strata.commonLogger);

strata.use(strata.contentType, "text/plain")
strata.use(strata.contentLength);
strata.use(strata.sessionCookie, {
    secret: "sup3rs3kret",
    name: "myapp.session"
});
strata.use(strata.file, __dirname + "/Public");

strata.post("/login", function (env, callback) {
	var req = strata.Request(env);

	req.params(function (err, params) {
		if (db[params.username] === params.password) {
			req.session.username= params.username;
			strata.redirsct(env, callback, "/");
		}
		else {
			strata.redirect(env, callback, "/login.htmml");
		}
	});

});

strata.get("/", function (env, callback) {
	if (!env.session.username) {
		strata.redirect(env, callback, "login.html");
		return;
	}
	callback(200, {}, "Welcome!" + env.session.username + "\n");
});

strata.run();