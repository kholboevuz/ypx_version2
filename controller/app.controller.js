

const HomeController = (req, res) =>{
    res.render('home', {
        title: "Fan ta'lim innovatsiya",
        home: true,
        csrfToken: req.csrfToken()
    })
}   


const RegisterController = (req, res) =>{
    res.render('register', {
        title: "Ro'yxatdan o'tish",
        register: true,
        csrfToken: req.csrfToken()
    })
}

const LoginController = (req, res) =>{
    res.render('login', {
        title: 'Kirish',
        login: true,
        csrfToken: req.csrfToken()
    })
}


const DashboardController = (req, res) =>{
    res.render('main', {
        title: 'Dashboard',
        main: true,
        ActiveMain: true,
        csrfToken: req.csrfToken()
    })
}

const AddController = (req, res) =>{

    res.render('addarticle',{
        title: "Maqola yuborish",
        main: true,
        ActiveAdd: true
    })

}


const SuccessController= (req, res) =>{
    res.render('success',{
        title: "Info",
        main: true,
    })
}



const FilePathController = (req, res) =>{
    const filepath = path.join(__dirname, '..', 'uploads')
    console.log(filepath);
}



module.exports = {
    HomeController,
    RegisterController,
    LoginController,
    DashboardController,
    AddController,
    SuccessController,
    FilePathController
    
}