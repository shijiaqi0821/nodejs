const MongoClient = require('mongodb').MongoClient;

//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.62.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    //选择数据库以及集合
    const collection = client.db("in1906").collection("users");

//获取数据

//查询
collection.find({}).toArray(function(err,docs){
    console.log(111);
    console.log(docs);
});

//添加
const  doc={name:'wo',age:28,email:'wo@qq.com',tel:'1234567890'};
collection.insertOne(doc,function(err,result){
    console.log(err);
    console.log(result);
    console.log("win");
});


//更新
const where={name:'xiaoli'};
const set={$set:{age:100}};

collection.updateOne(where,set,function(err,result){
    console.log('win');
});


//删除
const where1={name:'lisi'};
collection.deleteOne(where1,function(err,result){
    console.log('删除成功');
});



client.close();
});