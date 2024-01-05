require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const karyawanRoutes = require('./routes/karyawan');
const cutiRoutes = require('./routes/cuti');
const middlewareLogRequest = require('./middleware/logs');

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use('/karyawan',  karyawanRoutes);
app.use('/cuti',  cutiRoutes);

app.listen(PORT, ()=>{
    console.log(`Server berhasil running di port ${PORT}`);
})