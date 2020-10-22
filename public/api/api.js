function create() {

    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server = name, password, email 
    var status = document.getElementById('status');
    var url = '/data';
    //console.log("INPUTS:");
    var i = url.length + 1;
    //console.log(i);
    person.push([i, fname.value, email.value, 0, password.value , []]);//agrega fila
    move_to_db();
    superagente(); 
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server -- email, password

    var status = document.getElementById('status');
    var success = false;
    for(let i=0; i< person.length ; i++){
        if (email.value == person[i][2] && password.value == person[i][4]){
            success = true
            i = person.length;}
        else
            {success = false}
    }
    if(success==true){status.innerHTML = JSON.stringify("Succesful Login");console.log("Succesful Login");}
    if(success==false){status.innerHTML = JSON.stringify("Email/Password Incorrect");console.log("Email/Password Incorrect");}
    move_to_db();
    superagente(); 
}

function deposit(){
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server -- email, amount 
    var status = document.getElementById('status');
    for(let i=0; i< person.length ; i++){
            if (email.value == person[i][2]){
                persona_i = i;
                i = person.length;}
            else {persona_i = 99;}
            }
            if (persona_i == 99){
                JSON.stringify("Email/Password Incorrect");console.log("The email does not exist");
            }  
    var amount_n = parseInt(amount.value);//string a int
    person[persona_i][5].push(amount_n);//agrega el retiro a transactions 
    person[persona_i][3] = getTotal(person[persona_i][5]);//suma las transactions
    move_to_db();
    superagente(); 
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server -- email, amount 
    var status = document.getElementById('status');
    console.log(email.value, amount.value);
    console.log(person.length);
    for(let i=0; i< person.length ; i++){
            if (email.value == person[i][2]){
                persona_i = i;
                i = person.length;}
            else {persona_i = 99;}
            }
            if (persona_i == 99){
                JSON.stringify("Email/Password Incorrect");console.log("The email does not exist");
            }  
    var amount_n = parseInt(amount.value);//string a int
    person[persona_i][5].push(-amount_n);//agrega el retiro a transactions 
    person[persona_i][3] = getTotal(person[persona_i][5]);//suma las transactions
    move_to_db();
    superagente(); 
}

function transaction() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions -- email
    var status = document.getElementById('status');
    console.log(email.value);
    var persona_i = 99;
    for(let i=0; i< person.length ; i++){
            if (email.value == person[i][2]){
                persona_i = i;
                status.innerHTML = JSON.stringify(person[persona_i][5]); 
                i = person.length;}
            else {persona_i = 99;}
            }
    if (persona_i == 99){
            status.innerHTML = JSON.stringify("Email Incorrect");
            console.log("The email does not exist");}  
    move_to_db();
    superagente(); 
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance -- email
    var status = document.getElementById('status');
    console.log(email.value);
    var persona_i = 99;
    for(let i=0; i< person.length ; i++){
            if (email.value == person[i][2]){
                persona_i = i;
                status.innerHTML = JSON.stringify(person[persona_i][3]); 
                i = person.length;}
            else {persona_i = 99;}
            }
    if (persona_i == 99){
            status.innerHTML = JSON.stringify("Email Incorrect");
            console.log("The email does not exist");}  
    move_to_db();
    superagente(); 
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data -- email
    var status = document.getElementById('status');
    console.log(email.value);
    var persona_i = 99;
    for(let i=0; i< person.length ; i++){
            if (email.value == person[i][2]){
                persona_i = i;
                status.innerHTML = JSON.stringify(person[persona_i][3]); 
                i = person.length;}
            else {persona_i = 99;}
            }
    if (persona_i == 99){
            status.innerHTML = JSON.stringify("Email Incorrect");
            console.log("The email does not exist");}  
    move_to_db();
    superagente(); 
}


function getTotal(accountMonitor){
    let total = 0; 
    for(let i=0; i< accountMonitor.length ; i++){
            total += accountMonitor[i];}
            return total;
}


function move_to_db(){
    console.log(person);
    //console.log(person.length);
}


    //[["1", "Andrea", "andreadb@mit.edu", 3060, "12345" , [10,40,10,3000,-400,-300]],

    // person[1][4]="kdkd";//updates field
    // console.log(person[0][5]);//show account
    // console.log(getTotal(person[0][5]));//SUMS
    // person[0][5].push(900);//adds transaction
    // console.log(person[0][5]);
    // person.push(["3", "Viviana", "vivi@mit.edu", 111, "jsjs" , [1,1,1,-2]]);//agrega fila
    //console.log(person);