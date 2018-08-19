//=========
//Puerto
//========

process.env.PORT = process.env.PORT || 3000


//=========
//Entorno
//========

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';



//=========
//Base de Datos
//========

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb://distefanoj138:a123456@ds125932.mlab.com:25932/distefanoj138_cafe';
}

process.env.URLDB = urlDB;