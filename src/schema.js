const { makeExecutableSchema } = require("@graphql-tools/schema");
const { resolvers } = require("./resolvers");

const typeDefs = `
type Query
{
    saludar(name:String!):String
    empleados:[Empleado]
    departamentos: [Departamento]
}
type Departamento
{
    _id: ID
    nombre: String
    slogan: String
    empleados:[Empleado]
}

type Gerente
{
    _id: ID
    nombre: String
    email: String
}
type Empleado
{
    _id: ID
    nombre: String!
    sueldo: Float
}
input EmpleadoInput
{
    nombre: String!
    sueldo: Float
}
type Mutation
{
    createEmpleado(input:EmpleadoInput):Empleado
}
input DepartamentoInput{
    nombre:String!
    slogan:String
}
type Mutation
{
    createEmpleado(input:EmpleadoInput):Empleado
    createDepartamento(input:DepartamentoInput):Departamento
}
`;
module.exports = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
