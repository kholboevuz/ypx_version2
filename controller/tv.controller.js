const TvController = (req, res)=>{

    res.render('varioustv', {
        main: true,
        title: "Various Sciense tv",
        ActiveTv: true
    })

}




module.exports = TvController