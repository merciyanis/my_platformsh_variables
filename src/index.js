var routeVariable = require(APP_ROOT + '/.tmp_platformsh/routes.json');
var relationshipsVariable = require(APP_ROOT + '/.tmp_platformsh/relationships.json');

window.platformshRouteVariable = routeVariable;
window.platformshRelationshipsVariable = relationshipsVariable;

export { routeVariable, relationshipsVariable };
