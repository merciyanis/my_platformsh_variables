const routesVariable = {
  "http://api.local.iot-rocket.space/": {
    "attributes": {},
    "id": "api",
    "original_url": "https://api.{default}/",
    "primary": false,
    "production_url": "http://api.local.iot-rocket.space/",
    "type": "upstream",
    "upstream": "api"
  },
  "http://app.local.iot-rocket.space/": {
    "attributes": {},
    "id": "app",
    "original_url": "https://app.{default}/",
    "primary": true,
    "production_url": "http://app.local.iot-rocket.space/",
    "type": "upstream",
    "upstream": "app"
  }
};

const apiRelationship = {
  "host": "api.internal",
  "hostname": "localhost",
  "cluster": "local",
  "service": "api",
  "rel": "http",
  "scheme": "http",
  "username": null,
  "password": null,
  "port": 80,
  "epoch": 0,
  "path": null,
  "query": {},
  "fragment": null,
  "public": false,
  "host_mapped": false,
  "type": "python:3.8",
  "instance_ips": [
    "0.0.0.0"
  ],
  "ip": "0.0.0.0"
};

export {
    routesVariable,
    apiRelationship
}
