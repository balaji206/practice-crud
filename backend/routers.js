const express = require('express')
const router = express.Router();
const book = require('./schema')
router.post('/create',async(req,res)=>{
    try{
        const {title,author,image} = req.body;
        const newBook = new book({
            title,
            author,
            image
        })
        const savedbook = await newBook.save();
        res.status(200).send(savedbook);
    }
    catch(err){
        res.status(404).send(err);
    }
})

router.get('/books',async(req,res)=>{
    try{
        const books = await book.find();
        res.status(200).send(books);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})
router.get('/books/:id',async(req,res)=>{
    try{
        const getbook = await book.findById(req.params.id);
        if(!getbook)
        {
            res.status(400).send('no book found with the given id');
        }
        res.json(getbook);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})
router.put('/edit/:id',async(req,res)=>{
    try{
        const{title,author,image} = req.body;

        const updated = await book.findByIdAndUpdate(
            req.params.id,
            {title,author,image},
            {new:true}
        )
        res.status(200).send(updated);
    }
    catch(err)
    {
        res.status(400).send(err);
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const deleted = await book.findByIdAndDelete(req.params.id);
        if(!deleted)
        {
            res.status(400).send('book not found');
        }
        res.status(200).send('Book deleted successfully');
    }
    catch(err)
    {
        res.status(400).send('error in deleting book',err);
    }
})
module.exports = router;