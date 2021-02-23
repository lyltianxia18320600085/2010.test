let express = require('express');
let app = express();
app.use(express.static('./'));
app.get('/',function(req,res){
    res.send('我是默认的接口地址')
});
app.listen(8888)