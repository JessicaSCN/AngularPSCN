const Marca = require("../models/marca");

const marcaCtrl = {};

marcaCtrl.getMarcas = async (req, res) => {
  
    const marcas = await Marca.find()
    res.json(marcas);

}

marcaCtrl.createMarcas = async (req, res) => {
  
    const marca = new Marca(req.body);
    await marca.save();
    res.json({
        status: "Empleado guardado"
    });

}


marcaCtrl.getMarca = async (req, res) => {
  
    const marca = await Marca.findById(req.params.id);
    res.json(marca);

}

marcaCtrl.updateMarca = async (req, res) => {

    const { id } = req.params;
    const marca = {
        name: req.body.name,
        imagen: req.body.imagen,
        categoria: req.body.categoria
    };

    await Marca.findByIdAndUpdate(id, {$set: marca}, {new: true});
    res.json({status: "Marca updated"});

}

marcaCtrl.deleteMarca = async (req, res) => {

    await Marca.findByIdAndRemove(req.params.id);
    res.json({status: "Marca deleted"});

}

module.exports = marcaCtrl;