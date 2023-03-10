const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => 
{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

  const url = 'mongodb+srv://SeanY:COP4331$@atlascluster.avo2ye5.mongodb.net/?retryWrites=true&w=majority';
  const MongoClient = require("mongodb").MongoClient;
  const client = new MongoClient(url);
  client.connect(console.log("mongodb connected"));

  app.post('/api/login', async (req, res, next) => 
  {
    // incoming: login, password
    // outgoing: id, firstName, lastName, error
      
   var error = '';
  
    const { login, password } = req.body;
  
    const db = client.db("StudyBuddy");
    const results = await db.collection('Users').find({login:login,password:password}).toArray();
  
    var id = -1;
    var fn = '';
    var ln = '';
  
    if( results.length > 0 )
    {
      id = results[0]._id;
      fn = results[0].firstName;
      ln = results[0].lastName;
    }
  
    var ret = { id:id, firstName:fn, lastName:ln, error:''};
    res.status(200).json(ret);
  });

  app.post('/api/register', async (req, res, next) =>
{
	
  const { firstName, lastName, username, password} = req.body;

  const newUser = {firstName:firstName,lastName:lastName,username:username,password:password};
  var error = '';

  try
  {
    const db = client.db("StudyBuddy");
    const result = db.collection('Users').insertOne(newUser);
  }
  catch(e)
  {
    error = e.toString();
  }

  //

  var ret = { error: error };
  res.status(200).json(ret);
});

app.listen(5000); // start Node + Express server on port 5000
