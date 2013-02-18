var assert = require('assert');
exports.run = function(fixture) {
	assert.ok(fixture);
	assert.ok(fixture.a);
	assert.ok(fixture.b);
	assert.ok(fixture.c);
	assert.ok(fixture.d);

	assert.ok(fixture.a.b);
	assert.ok(fixture.b.a);
	assert.ok(fixture.c.a);
	assert.ok(fixture.c.d);
	assert.ok(fixture.d.a);
	assert.ok(fixture.d.c);

	assert.ok(fixture.c.a.fish);
	assert.ok(fixture.d.a.fish);

	assert.ok(fixture.a.fish);
	assert.ok(fixture.b.a.fish, "b's reference to a is complete");

	assert.ok(fixture.c.a.b.a.fish);
	assert.ok(fixture.d.a.b.a.fish);
}
