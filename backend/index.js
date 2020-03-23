const express = require("express");
const app = express();


app.get('/',function(request,response){
    return response.json({
        nome : "eae",
        sexo : "Masculuno"
    })
});

app.listen(3333);

