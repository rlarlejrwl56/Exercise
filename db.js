const mysql = require('serverless-mysql');

const db = mysql({
    config : {
        host : process.env.DB_HOSTNAME,
        port : process.env.DB_PORT,
        database : process.env.DB_DBNAME,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD
    }
});

export default async function excuteQuery({ query, values}){
    try{
        const res = await db.query(query, values);
        await db.end();
        return res;
    }catch (e){
        return e;
    }
}