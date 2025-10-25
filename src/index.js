import express from "express"
const expressGraphqlHTTP = require('express-graphql');
const app=express();
require('./database');
app.get('/',(req,res)=>{res.json({
  message:'GRAPHQL Empleados'
})});
const schema = require ('./schema.js');
app.use('/graphql',expressGraphqlHTTP.graphqlHTTP({
  graphiql:true,
  schema:schema
}));

const server= app.listen('3000');
console.log('Server corriendo en el puerto',3000);
module.exports=server;