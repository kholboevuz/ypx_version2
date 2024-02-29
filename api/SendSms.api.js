const axios = require('axios');

const SendSms = (phonenumber,text)=>{

let data = JSON.stringify({
    "jsonrpc": "2.0",
    "apiversion": "1.0",
    "params": {
      "method": "SendSmsText",
      "body": {
        "phonenumber": phonenumber,
        "text": text
      }
    }
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://94.241.168.135:3000/api/v1/mobile',
    headers: { 
      'Content-Type': 'application/json', 
      'Authorization': 'Bearer eXB4ZXZha3VhdG9ycGFzc3dvcmQ='
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
  
}


module.exports = SendSms