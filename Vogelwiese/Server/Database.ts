import * as Mongo from "mongodb";
console.log("Database connecting");

let databaseURL: string = "mongodb://localhost:27017";
let databaseName: string = "test";
let db: Mongo.Db;
let score: Mongo.Collection;

// running on heroku?
if (process.env.NODE_ENV == "production") {
    // databaseURL = "mongodb+srv://username:password@hostname:port/database";
    //databaseURL = "mongodb+srv://player:player@cluster0-om0ww.mongodb.net/test?retryWrites=true&w=majority";
    databaseURL = "mongodb+srv://player:playerLizzy@vogelhaus-f9agi.mongodb.net/test?retryWrites=true&w=majority";
    databaseName = "vogelhaus";
}

// try to connect to database, then activate callback "handleConnect" 
Mongo.MongoClient.connect(databaseURL, handleConnect);

// connect-handler receives two standard parameters, an error object and a database client object
function handleConnect(_e: Mongo.MongoError, _client: Mongo.Db): void {
    if (_e)
        console.log("Unable to connect to database, error: ", _e);
    else {
        console.log("Connected to database!");
        db = _client.db(databaseName);
        score = db.collection("score");
    }
}

export function insert(_doc: PlayerData): void {
    // try insertion then activate callback "handleInsert"
    score.insertOne(_doc, handleInsert);
}

// insertion-handler receives an error object as standard parameter
function handleInsert(_e: Mongo.MongoError): void {
    console.log("Database insertion returned -> " + _e);
}

// try to fetch all documents from database, then activate callback
export function findAll(_callback: Function): void {
    // cursor points to the retreived set of documents in memory
    let cursor: Mongo.Cursor = score.find();
    // try to convert to array, then activate callback "prepareAnswer"
    cursor.toArray(prepareAnswer);

    // toArray-handler receives two standard parameters, an error object and the array
    // implemented as inner function, so _callback is in scope
    function prepareAnswer(_e: Mongo.MongoError, playerArray: PlayerData[]): void {
        if (_e)
            _callback("Error" + _e);
        else
            // stringify creates a json-string, passed it back to _callback
            _callback(JSON.stringify(playerArray));
    }
}

export function search(_callback: Function, _gesuchtenummer: string): void {
    let gn: number = Number(_gesuchtenummer);
  
    score.find({ "score": gn }).toArray(prepareAnswer); //score ist oben schon definiert und zugewiesen

    function prepareAnswer(_e: Mongo.MongoError, playerArray: PlayerData[]): void {
        if (_e)
            _callback("Error" + _e);
        else

            _callback(JSON.stringify(playerArray));
    }

}