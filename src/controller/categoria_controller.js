const mongoose = require('mongoose');
const Categoria = mongoose.model('Categoria');
const Cat_postagem = mongoose.model('Cat_Postagem');
const Validator =require('../fluent-validator');

exports.post = (req,res, next)=>{
    let validar = new Validator();
    validar.hasMinLen(req.body.nome, 3, 'O nome deve ter no minimo 3 caracteres');

    if(!validar.isValid()){
        res.status(400).send(validar.errors()).end();
        return;
    }
    let categoria = new Categoria();
    categoria.nome = req.body.nome, 'O campo não pode ficar vazio';
    categoria.slug = req.body.slug;
    categoria.subcategorias = req.body.subcategorias;
    categoria.save().then( x=>{
        res.status(201).send({message: 'Cadastrado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao cadastrar',
            data: e
        })
    });
};

exports.get = (req, res, next) =>{
    Categoria.find().then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.getBySlug = (req, res, next) =>{
    Categoria.findOne({
        slug: req.params.slug
    }).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.getById = (req, res, next) =>{
    Categoria.findById(req.params.id).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.getBySub = (req, res, next) =>{
    Categoria.find({
        subcategorias: req.params.subcategorias}).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

exports.put = (req, res, next) => {
    Categoria.findByIdAndUpdate(req.params.id,{
        $set:{
            nome : req.body.nome,
            subcategorias : req.body.subcategorias
        }
    }).then( x=>{
        res.status(200).send({message: 'Atualizado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao atualizar',
            data: e
        })
    });
};

exports.putBySlug = (req, res, next) => {
    Categoria.findOneAndUpdate(req.params.id,{
        $set:{
            nome : req.body.nome,
            subcategorias : req.body.subcategorias
        }
    }).then( x=>{
        res.status(200).send({message: 'Atualizado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao atualizar',
            data: e
        })
    });
};

exports.del = (req, res, next) => {
    Categoria.findByIdAndRemove(req.body.id).then( x => {
        res.status(200).send({
            message: "Autor Removido"
        });
    }).catch(e =>{
        res.status(400).send({
            message: "Erro ao deletar",
            data: e
        });
    });
};