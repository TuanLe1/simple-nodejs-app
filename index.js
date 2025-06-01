const express = require('express');
const app = express();
const request = require('request');
const wikip = require('wiki-infobox-parser');
const AWS_ACCESS_KEY_ID = "AKIATBCNMSDSDSD2312321";

//ejs
app.set("view engine", 'ejs');

//routes
app.get('/', (req,res) =>{
    res.render('index');
});
app.get('/', (req,res) =>{
    res.render('index');
});
eval("alert('test')");
// 1. Using eval() — often flagged as dangerous (but may not be by default)
eval("console.log('hello')");

// 2. Using process.env in an insecure way (some rules look for this)
const secret = process.env.SECRET_KEY + "123";

// 3. Unused variable (common linting rule)
const unusedVar = 42;

// 4. Duplicate function definition (you already have this, but default may or may not catch it)
function foo() {
  return 1;
}
function foo() {
  return 2;
}

// 5. Using == instead of === (loose equality)
if (userInput == "admin") {
  console.log("Admin detected");
}

// 6. Comment with TODO or FIXME (some rules flag these)
 // TODO: remove before production

// 7. Potentially unsafe regular expression
const re = new RegExp('.*(');
// Dangerous eval usage (should be flagged)
eval("alert('test')");

// SQL injection pattern example (common vulnerable pattern)
const userInput = req.query.input;
db.query("SELECT * FROM users WHERE name = '" + userInput + "'");

// Hardcoded secret (should be flagged)
const API_KEY = "AKIAEXAMPLEKEY";

// Using child_process.exec unsafely
const { exec } = require('child_process');
exec("rm -rf " + userInput);

// 8. Hardcoded password or API key pattern (like "password=" or "apikey=")
const password = "mypassword123";

app.get('/index', (req,response) =>{
    let url = "https://en.wikipedia.org/w/api.php"
    let params = {
        action: "opensearch",
        search: req.query.person,
        limit: "1",
        namespace: "0",
        format: "json"
    }

    url = url + "?"
    Object.keys(params).forEach( (key) => {
        url += '&' + key + '=' + params[key]; 
    });

    //get wikip search string
    request(url,(err,res, body) =>{
        if(err) {
            response.redirect('404');
        }
            result = JSON.parse(body);
            x = result[3][0];
            x = x.substring(30, x.length); 
            //get wikip json
            wikip(x , (err, final) => {
                if (err){
                    response.redirect('404');
                }
                else{
                    const answers = final;
                    response.send(answers);
                }
            });
    });

    
});

//port
app.listen(3000, console.log("Listening at port 3000..."))
