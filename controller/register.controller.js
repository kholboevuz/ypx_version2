const SendSms = require('../api/SendSms.api');
const convertPhoneNumber = require('../function/phone.function');
const User = require('../models/users.models');

const UserRegisterController = async (req, res) => {
    const { lastname, firstname, emailaddress, emailnewsletter, phonenumber, eduinfo, fulladdress, addresscity, addressstate, addresszip, sciensecheck, scienseyear, academic, academicinfo, userdata } = req.body;

    //random password
    let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let string_length = 10;
    let randomstring = '';
    for (let i = 0; i < string_length; i++) {
        let rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum, rnum + 1);
    }

    try {
        const ValidationEmail = await User.findOne({ EmailAddress: emailaddress });
        const ValidationPhone = await User.findOne({ PhoneNumber: phonenumber });

        if (ValidationEmail) {
            return res.status(200).json({
                success: false,
                code: 200,
                message: 'Bunday email foydalanuvchi mavjud'
            });
        }

        if (ValidationPhone) {
            return res.status(400).json({
                success: false,
                code: 200,
                message: 'Bunday telefon raqam foydalanuvchi mavjud'
            });
        }

       

        const register = await User.create({
            LastName: lastname,
            FirstName: firstname,
            EmailAddress: emailaddress,
            EmailNews: emailnewsletter,
            PhoneNumber: phonenumber,
            EduInfo: eduinfo,
            FullAddress: fulladdress,
            AddressCity: addresscity,
            AddressState: addressstate,
            AddressZip: addresszip,
            ScienceCheck: sciensecheck,
            ScienceYear: scienseyear,
            Academic: academic,
            AcademicInfo: academicinfo || false,
            UserData: userdata,
            password: randomstring
        });

        //Sms yuborish
        const convertedNumber = convertPhoneNumber(phonenumber)
        const smstext = `Fan-talim va innovatsiya jurnali! \nlogin: ${emailaddress} \nparol: ${randomstring}`

        SendSms(convertedNumber, smstext)
        //sms yuborildi

        return res.status(200).json({
            success: true,
            code: 200,
            data: register,
            message: 'Foydalanuvchu muvaffaqiyatli yaratildi'
        });



    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({
            success: false,
            code: 500,
            message: 'Internal Server Error'
        });
    }
};

module.exports = {
    UserRegisterController
};
