const Validator = require('fastest-validator');

const v = new Validator();

const { Cuti } = require('../../models');

const createNewCuti = async (req,res)=>{
    const schema = {
        no_induk : 'string',
        tanggal_cuti: {
            type: 'string',
            pattern: /^\d{4}-\d{2}-\d{2}$/, // Regex pattern for YYYY-MM-DD format
        },
        lama_cuti: 'number|integer',
        keterangan: 'string'
    }
    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res
        .status(400)
        .json(validate)
    } 
    const cuti = await Cuti.create(req.body);
    res.json({
        message: 'Berhasil menambahkan data cuti ',
        cuti
    })   
    
}
const getAllCuti = async (req,res)=>{
    const {sort} = req.query;
    const validSortColumns = ['tanggal_cuti'];

    if (sort && !validSortColumns.includes(sort)) {
        return res
        .status(400)
        .json({ message: 'Invalid sort parameter' });
    }
    const cuti = await Cuti.findAll({
        order: sort ? [[sort, 'ASC']] : [['id', 'ASC']],
    });
    if(sort){
        res.json({  
            message: `Berhasil mendapatkan data cuti, disorting berdasarkan ${sort}`,
            cuti
        })   
    }else{
        res.json({     
        message: 'Berhasil mendapatkan data cuti',
        cuti
        })  
    }

}

const updateCuti = async (req,res)=>{
    const id = req.params.id;

    let cuti = await Cuti.findByPk(id);
    if(!cuti){
        return res.json({message: 'Data cuti tidak ditemukan'})
    }
    const schema = {
        no_induk : 'string|optional',
        tanggal_cuti: {
            type: 'string',
            optional : true,
            pattern: /^\d{4}-\d{2}-\d{2}$/, // Regex pattern for YYYY-MM-DD format
        },
        lama_cuti: 'number|integer|optional',
        keterangan: 'string|optional'
    }
    const validate = v.validate(req.body, schema)
    if (validate.length){
        return res
        .status(400)
        .json(validate)
    }
    
    cuti = await cuti.update(req.body);
    res.json({
        message: 'Berhasil mengupdate cuti',
        cuti
    })
}

const deleteCuti = async (req,res)=>{
    const id = req.params.id;

    const cuti = await Cuti.findByPk(id);
    if(!cuti){
        return res.json({message: 'Data cuti tidak ditemukan'})
    }
    await cuti.destroy();
    res.json({
        message: 'Berhasil delete data cuti',
    })
    
}
module.exports = {
    getAllCuti,
    createNewCuti,
    updateCuti,
    deleteCuti
}