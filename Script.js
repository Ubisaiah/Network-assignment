function userChoice(choice) {
    switch (choice) {
        case 1:
            alert("Your Balance is NGN6500.00.");
            break;
        case 2:
            buyData();
            break;
        case 3:
            dataBalance();
            break;
        case 4:
            alert("Congrats! You have renewed your current data balance. ENJOY!");
            break;
        case 5:
            rechargeAirtime();
            break;
        case 6:
            borrowAirtime();
            break;
        case 7:
            borrowData();
            break;
        default:
            alert("WRONG INPUT! Kindly input one of these options.");
    }
}
// Function to show data balance
function dataBalance() {
    alert("Your data balance is 20GB.");
}
// Function to recharge airtime
function rechargeAirtime() {
    const options = `
        Select the amount to recharge:
        1. NGN1000
        2. NGN2000
        3. NGN5000
        4. NGN10000
        5. NGN20000
        6. NGN30000
    `;
    let choice = prompt(options);
    if (choice === null) return; // If CANCEL is clicked, silently return to main menu
    switch (choice) {
        case '1':
            alert("You have successfully recharged NGN1000. Thank you!");
            break;
        case '2':
            alert("You have successfully recharged NGN2000. Thank you!");
            break;
        case '3':
            alert("You have successfully recharged NGN5000. Thank you!");
            break;
        case '4':
            alert("You have successfully recharged NGN10000. Thank you!");
            break;
        case '5':
            alert("You have successfully recharged NGN20000. Thank you!");
            break;
        case '6':
            alert("You have successfully recharged NGN30000. Thank you!");
            break;
        default:
            alert("WRONG INPUT! Kindly input one of these options.");
            rechargeAirtime(); // Restart function
    }
}
// Function to borrow airtime
function borrowAirtime() {
    const options = `
        Select the amount to borrow:
        1. NGN1000
        2. NGN2000
        3. NGN5000
        4. NGN10000
        5. NGN20000
        6. NGN30000
    `;
    let choice = prompt(options);
    if (choice === null) return; // If CANCEL is clicked, silently return to main menu
    switch (choice) {
        case '1':
            alert("You have successfully borrowed NGN1000. Repayment on next recharge.");
            break;
        case '2':
            alert("You have successfully borrowed NGN2000. Repayment on next recharge.");
            break;
        case '3':
            alert("You have successfully borrowed NGN5000. Repayment on next recharge.");
            break;
        case '4':
            alert("You have successfully borrowed NGN10000. Repayment on next recharge.");
            break;
        case '5':
            alert("You have successfully borrowed NGN20000. Repayment on next recharge.");
            break;
        case '6':
            alert("You have successfully borrowed NGN30000. Repayment on next recharge.");
            break;
        default:
            alert("WRONG INPUT! Kindly input one of these options.");
            borrowAirtime(); // Restart function
    }
}
// Function to borrow data
function borrowData() {
    const options = `
        Select the data bundle to borrow:
        1. 2GB @ NGN1000
        2. 5GB @ NGN2000
        3. 8GB @ NGN5000
        4. 15GB @ NGN10000
        5. 25GB @ NGN20000
        6. 48GB @ NGN30000
    `;
    let choice = prompt(options);
    if (choice === null) return; // If CANCEL is clicked, silently return to main menu
    switch (choice) {
        case '1':
            alert("You have successfully borrowed 2GB for NGN1000.");
            break;
        case '2':
            alert("You have successfully borrowed 5GB for NGN2000.");
            break;
        case '3':
            alert("You have successfully borrowed 8GB for NGN5000.");
            break;
        case '4':
            alert("You have successfully borrowed 15GB for NGN10000.");
            break;
        case '5':
            alert("You have successfully borrowed 25GB for NGN20000.");
            break;
        case '6':
            alert("You have successfully borrowed 48GB for NGN30000.");
            break;
        default:
            alert("WRONG INPUT! Kindly input one of these options.");
            borrowData(); // Restart function
    }
}
// Function to buy data
function buyData() {
    const options = `
        1. Daily Bundle (NGN100)
        2. Weekly Bundle (NGN500)
        3. Monthly Bundle (NGN5000)
        4. Yearly Bundle (NGN20000)
    `;
    let choice = prompt(options);
    if (choice === null) return; // If CANCEL is clicked, silently return to main menu
    switch (choice) {
        case '1':
            alert("Congratulations! You have purchased our Daily Data Bundle.");
            break;
        case '2':
            alert("Congratulations! You have purchased our Weekly Data Bundle.");
            break;
        case '3':
            alert("Congratulations! You have purchased our Monthly Data Bundle.");
            break;
        case '4':
            alert("Congratulations! You have purchased our Yearly Data Bundle. ");
            break;
        default:
            alert("WRONG INPUT! Kindly input one of these options.");
            buyData(); // Restart function
    }
}