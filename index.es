import Lokka from 'lokka';
const Transport = require('lokka-transport-http').Transport
const client = new Lokka({
    transport:new Transport('http://localhost:3000/graphql')
});
// const dataInfo = client.createFragment(
//         `fragment on User{
//             name,
//             age
//         }`
//     )
// client.query(`
//         {
//             user(id:"2"){
//                 ...${dataInfo}
//             }
//         }
//     `).then(result=>{
//         console.log('here:'+result.user);
//     })