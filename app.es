const Koa = require('koa');
// import koaBody from 'koa-bodyparser';
// import koaRouter from 'koa-router';
import {graphqlKoa} from 'graphql-server-koa';
import {graphql,GraphQLSchema,GraphQLObjectType,GraphQLString,GraphQLInt} from 'graphql';
//数据
const dataQuery = {
    '1':{
        "id":"1",
        "name":"first",
        "age":18
    },
    '2':{
        "id":'2',
        "name":'second',
        "age":22
    }
}
const userType = new GraphQLObjectType({
    name:'User',
    fields:{
        id:{type:GraphQLString},
        name:{type:GraphQLString},
        age:{type:GraphQLInt}
    }
});
const myGraphQLSchema = new GraphQLSchema({
    query:new GraphQLObjectType({
        name:'Query',
        fields:{
            user:{
                type:userType,
                args:{
                    id:{type:GraphQLString}
                },
                resolve:function(_,args){
                    return dataQuery[args.id];
                }
            }
        }
    })
})

const app = new Koa();
// const router = new koaRouter();
import babel_co from 'babel-core';
import babel_polyfill from 'babel-polyfill';
const router =  require('koa-simple-router');

app.use(router(_ => {
    _.get('/graphql', graphqlKoa({ schema: myGraphQLSchema }))
}))

// app.use(koaBody());
// router.post('/graphql',graphqlKoa({ schema: myGraphQLSchema }));
// router.get('/graphql',graphqlKoa({ schema: myGraphQLSchema }));
// app.use(router.routes());
// app.use(router.allowedMethods());
app.listen(3000,function(){
    console.log('running at port 3000');
});