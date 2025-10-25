const { empleados } = require("./sample")
const Departamento =require('./models/Departamento');
export const 
    resolvers={
        Query:
        {
            saludar(root,{name},context){
                console.log(context);
                return `Hola ${name}!`;
            },
            empleados(){
                return empleados;
            },
            async departamentos(){
                return await Departamento.find()
            }
    },
    Mutation:{
        createEmpleado(_,{input})
        {
            input._id=empleados.length;
            console.log(input);
            empleados.push(input);
            return input;
        },
    },
    Mutation:{
        async createDepartamento(_,{input}){
            console.log(input);
            const newDepartamento=new Departamento(input)
            await newDepartamento.save();
            console.log(newDepartamento);
            return newDepartamento;
        }
    },
}