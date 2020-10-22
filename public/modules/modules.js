var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> `
    `   <p class="font-weight-bolder"> </p>
        <p class="font-weight-bold">BadBank Landing Module</p>
        <p class="font-weight-bolder">You can move around using the navigation bar</p>
        <img src="bank.png" class="rounded mx-auto d-block" alt="...">
        <div id="navigation"></div>
    </div> `
;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> ``
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">Create Account</div>
            <div class="card-body">
                <label for="name">Name:</label><br>
                <input type="text" id="fname" name="fname" value="Andrea"><br><br>
                <label for="email">e-mail:</label><br>
                <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
                <label for="password">Password:</label><br>
                <input type="text" id="password" name="password" value="123456"><br><br><br>
                <button onclick="create()">Create Account</button><br>
            </div>
    </div> `
;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> ``
    <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
    <div class="card-header">Login</div>
    <div class="card-body">
        <label for="email">e-mail:</label><br>
        <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
        <label for="password">Password:</label><br>
        <input type="text" id="password" name="password" value="123456"><br><br><br>
        <button onclick="login()">Login</button><br>
        <div id="login"></div>
    </div>
</div> `  
;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> ``
    <div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
            <div class="card-header">Deposit</div>
            <div class="card-body">
                <label for="email">e-mail:</label><br>
                <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
                <label for="amount">Amount:</label><br>                    
                <input type="text" id="amount" name="amount" value="Enter amount"><br><br><br>
                <button onclick="deposit()">Deposit</button><br>
                <div id="Deposit"></div>
            </div>
    </div>`
;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> ``
    <div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
            <div class="card-header">Withdraw</div>
            <div class="card-body">
                <label for="email">e-mail:</label><br>
                <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
                <label for="amount">Amount:</label><br>
                <input type="text" id="amount" name="amount" value="Enter amount"><br><br><br>
                <button onclick="withdraw()">Withdraw</button><br>
                <div id="Withdraw"></div>
            </div>
    </div>`
;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> ``
    <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
            <div class="card-header">Transaction</div>
            <div class="card-body">
                <label for="email">e-mail:</label><br>
                <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
                <button onclick="transaction()">Transaction</button><br>
                <div id="Transaction"></div>
            </div>
    </div>`
;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> ``
    <div class="card text-white bg-success mb-3" style="max-width: 18rem;">
            <div class="card-header">Balance</div>
            <div class="card-body">
                <label for="email">e-mail:</label><br>
                <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
                <button onclick="transaction()">Transaction</button><br>
                <div id="Transaction"></div>
            </div>
    </div>`
;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> `
;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> ``
    <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-header">All Data</div>
            <div class="card-body">
                <label for="email">e-mail:</label><br>
                <input type="text" id="email" name="email" value="andreadb@mit.edu"><br><br>
                <button onclick="transaction()">Transaction</button><br>
                <div id="Transaction"></div>
            </div>
    </div>`
;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
