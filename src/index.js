const routesVariable = require(APP_ROOT + '/.tmp_platformsh/routes.json');
const apiRelationship = require(APP_ROOT + '/.tmp_platformsh/api_relationship.json');

window.routesVariable = routesVariable;
window.apiRelationship = apiRelationship;

export {
    routesVariable,
    apiRelationship
};