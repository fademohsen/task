
const mongoose = require('mongoose')
const Item = require('../models/Item')
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

const _ = require('lodash');


exports.create = catchAsyncErrors(async (req, res) => {
    const data = req.body
    const newItem = new Item(data)
    newItem.save()
    res.status(200).send(data)
});

exports.findAll = catchAsyncErrors(async (req, res) => {
    const items = await Item.find();
    res.status(200).send(data)
});


exports.findOne = catchAsyncErrors(async (req, res) => {
    const id = req.params.id;
    const items = await Item.findById(id);
    res.status(200).send(data)
});

exports.update = catchAsyncErrors(async (req, res) => {
    const id = req.params.id;
    let item = await Item.findById(id)
    let data = req.body
    _.assign(item, data)
    await item.save()
    res.status(200).send(data)
});

exports.delete = catchAsyncErrors(async (req, res) => {
    const id = req.params.id;
    let item = await Item.findByIdAndDelete(id)
    res.status(200).end()
});