import mssql from 'mssql';
import dotenv from  'dotenv';


dotenv.config({
    path:"../../.env"
})



export const sqlConfig = {
    user: process.env.DB_USER as string,
    password: process.env.DB_PWD as string,
    database: process.env.DB_NAME as string,
    server: process.env.SERVER as string,

    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}

 console.log(sqlConfig);


/* 
  let connect = async () =>{
    let pool = await mssql.connect(sqlConfig)

         if(pool.connected){
        console.log("connected");

        let query = 'CREATE TABLE Users(user_id VARCHAR(100) NOT NULL, name VARCHAR(100) NOT NULL, email VARCHAR(255) NOT NULL UNIQUE, phone_number VARCHAR(15) NOT NULL UNIQUE, role VARCHAR(20), Password VARCHAR(200) NOT NULL, profile_image VARCHAR(200), location VARCHAR(150))'
       
         let query2 = 'DROP TABLE Users'
        let result = (await (await pool.connect()).query(query2)).rowsAffected

        console.log(result);
        
    }else{
        console.log('not connected');
        
    }
}

connect()  */