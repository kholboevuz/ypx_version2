
const Article = require('../models/article.models');
const path  = require('path')
const UserAddController = async (req, res) => {
    try {
        const { articlename, authors, keywords, public } = req.body;

        if (!req.files || !req.files.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const file = req.files.file; 

        const uploadPath = `./uploads/${file.name}`;
        await file.mv(uploadPath);
        const filepath = path.join(__dirname, '..', 'uploads')
        const newArticle = new Article({
            articlename,
            authors,
            keywords,
            file: `${filepath}/${file.name}`, 
            public,
            userid: '65da3b43f56cca72ab7cbd1d'
        });

        await newArticle.save();

        res.redirect('/dashboard/success');
    } catch (error) {
        console.error('Error in adding article:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = UserAddController;
