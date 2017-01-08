const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
  return console.log('Unable to connect to mongodb server');
}
console.log('connected to mongodb');
// db.collection('Todos').insertOne({
//     text:'Something todo',
//     completed:false
// },(err,result)=>{
//     if(err){
//         return console.log('Unable to insert',err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
// })

db.collection('Users').insertOne({
    name:'Ameya',
    age:25,
    location:'Santa Clara'
},(err, result)=>{
    if(err){
        return console.log('Unable to insert in mongodb',err);
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
});
db.close();
});