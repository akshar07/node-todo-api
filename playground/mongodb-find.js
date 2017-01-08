const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return console.log('Unable to connect to mongodb server');
}
console.log('connected to mongodb');
// db.collection('Todos').find().toArray().then((docs)=>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
//     console.log('Unable to fetch');
// })

db.collection('Users').find({name:'Akshar'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log('Unable to fetch');
})

});