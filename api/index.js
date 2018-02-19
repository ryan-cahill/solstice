const restify = require('restify'),
    corsMiddleware = require('restify-cors-middleware'),
    server = restify.createServer({
        name: 'solstice'
    }),
    port = 5001,
    CORS = corsMiddleware({
        origins: ['*'],
        allowHeaders: ['*']
    }),
    utilityData = require('./lib/dataservices/utilityDataFormatter').getUtilityDataWithUuids();

server.pre(CORS.preflight);
server.use(CORS.actual);
server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.get({
    path: '/utilityData'
}, (req, res) => {
    res.send({
        body: {
            utilityData
        }
    })
});

server.get({
    path: '/utilityData/:billingItemUuid'
}, (req, res) => {
    const billingItemUuid = req.params.billingItemUuid;
    res.send({
        body: {
            utilityData: utilityData[billingItemUuid]
        }
    })
});

server.put({
    path: '/updateUtilityData/:updatedDataUuid'
}, (req, res) => {
    const updatedDataUuid = req.params.updatedDataUuid,
        body = req.body;

    Object.keys(body).forEach(key => {
        if (body[key] !== '') {
            utilityData[updatedDataUuid][key] = body[key];
        }
    });
    res.send(204);
});

server.get({
    path: '/health'
}, (req, res) => {
    console.log('health check');
    res.send(204);
});

server.listen(port, () => {
    console.log('server started on port ' + port);
});