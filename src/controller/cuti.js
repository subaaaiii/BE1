const cutiModel = require('../models/cuti');

const createNewCuti = async (req,res)=>{
    const {body} = req;
    try {
        await cutiModel.createNewCuti(body);
        res.json({
            message: 'Berhasil menambahkan data cuti ',
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}
const getAllCuti = async (req,res)=>{
    try {
        const {sort} = req.query
        const [data] = await cutiModel.getAllCuti(sort);

    res.json({
        message: 'Berhasil mendapatkan data cuti',
        data : data
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}

const updateCuti = async (req,res)=>{
    const {id} = req.params;
    const {body} = req;
    try {
        await cutiModel.updateCuti(body, id);
        res.json({
            message : "Berhasil Mengupdate data cuti",
            data : {
                id: id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
}

const deleteCuti = async (req,res)=>{
    const {id} = req.params;
    try {
        await cutiModel.deleteCuti(id);
        res.json({
            message : "Berhasil menghapus data cuti"
        }) 
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }
    
}
module.exports = {
    getAllCuti,
    createNewCuti,
    updateCuti,
    deleteCuti
}