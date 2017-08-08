'use strict';

var _graphqlServerKoa = require('graphql-server-koa');

var _graphql = require('graphql');

var _babelCore = require('babel-core');

var _babelCore2 = _interopRequireDefault(_babelCore);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

var Koa = require('koa');
// import koaBody from 'koa-bodyparser';
// import koaRouter from 'koa-router';

//数据
var dataQuery = {
    '1': {
        "id": "1",
        "name": "first",
        "age": 18
    },
    '2': {
        "id": '2',
        "name": 'second',
        "age": 22
    }
};
var userType = new _graphql.GraphQLObjectType({
    name: 'User',
    fields: {
        id: {
            type: _graphql.GraphQLString
        },
        name: {
            type: _graphql.GraphQLString
        },
        age: {
            type: _graphql.GraphQLInt
        }
    }
});
var myGraphQLSchema = new _graphql.GraphQLSchema({
    query: new _graphql.GraphQLObjectType({
        name: 'Query',
        fields: {
            user: {
                type: userType,
                args: {
                    id: {
                        type: _graphql.GraphQLString
                    }
                },
                resolve: function resolve(_, args) {
                    return dataQuery[args.id];
                }
            }
        }
    })
});

var app = new Koa();
// const router = new koaRouter();

var router = require('koa-simple-router');

app.use(router(function(_) {
    _.get('/graphql', (0, _graphqlServerKoa.graphqlKoa)({
        schema: myGraphQLSchema
    }));
}));

// app.use(koaBody());
// router.post('/graphql',graphqlKoa({ schema: myGraphQLSchema }));
// router.get('/graphql',graphqlKoa({ schema: myGraphQLSchema }));
// app.use(router.routes());
// app.use(router.allowedMethods());
app.listen(3000, function() {
    console.log('running at port 3000');
});