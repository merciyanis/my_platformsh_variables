const routesVariable = {"http://mock.eu.platform.sh/":{"ssi":{"enabled":false},"original_url":"http://{default}/","upstream":"ui","cache":{"default_ttl":0,"cookies":["*"],"enabled":true,"headers":["Accept","Accept-Language"]},"type":"upstream"},"https://mock.eu.platform.sh/":{"to":"http://mock.eu.platform.sh/","type":"redirect","original_url":"https://{default}/"}};

const relationshipsVariable = {"host": "api.internal", "hostname": "localhost", "cluster": "local", "service": "api", "rel": "http", "scheme": "http", "username": null, "password": null, "port": 80, "epoch": 0, "path": null, "query": {}, "fragment": null, "public": false, "host_mapped": false, "type": "python:3.8", "instance_ips": ["0.0.0.0"], "ip": "0.0.0.0"};

export {
    routesVariable,
    relationshipsVariable
}
