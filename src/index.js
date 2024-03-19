const routesVariable = require(APP_ROOT + '/.tmp_platformsh/routes.json');
const relationshipsVariable = require(APP_ROOT + '/.tmp_platformsh/relationships.json');

window.routesVariable = routesVariable;
window.relationshipsVariable = relationshipsVariable;

export {
    routesVariable,
    relationshipsVariable
};