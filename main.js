// Write your JavaScript here
//btn element must be outside of the function
document.getElementById("calculate-change").addEventListener("click", makeChange);

function makeChange(amount) {
    var due = document.getElementById("amount-due").value
    var received = document.getElementById("amount-received").value

    var owed = (received - due) * 100;

    const change = {
        twenty: 0,
        ten: 0,
        five: 0,
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0,
    }
    //math goes here
    change.twenty = Math.floor(owed / 2000)
    owed -= change.twenty * 2000
    document.getElementById("twenties-output").textContent = change.twenty;
    change.ten = Math.floor(owed / 1000)
    owed -= change.ten * 1000
    document.getElementById("tens-output").textContent = change.ten;
    change.five = Math.floor(owed / 500)
    owed -= change.five * 500
    document.getElementById("fives-output").textContent = change.five;
    change.dollars = Math.floor(owed / 100)
    owed -= change.dollars * 100
    document.getElementById("dollars-output").textContent = change.dollars;
    change.quarters = Math.floor(owed / 25)
    owed -= change.quarters * 25
    document.getElementById("quarters-output").textContent = change.quarters;
    change.dimes = Math.floor(owed / 10)
    owed -= change.dimes * 10
    document.getElementById("dimes-output").textContent = change.dimes;
    change.nickels = Math.floor(owed / 5)
    owed -= change.nickels * 5
    document.getElementById("nickels-output").textContent = change.nickels;
    change.pennies = Math.floor(owed / 1)
    owed -= change.pennies * 1
    document.getElementById("pennies-output").textContent = change.pennies;

    var error;
    if ((received < due)) {
        document.getElementById("output").innerHTML = "you still owe " + (due - received).toFixed(2)
        //document.write("You still owe " + [due - received])

    } else {
        document.getElementById("output").innerHTML = (received - due).toFixed(2)
        console.log(change)
    }


    //console.log(change, owed);

    // find the difference of the two numbers DONE
    // if received is less than due show error DONE
    // if over convert to pennies DONE
    // change is the book and each option such as quarters, dimes etc is the page. match is setting up that I want to do a equazion and floor is rounding down. owed is using the two input fields and dividing them by either one dollar 100 quarter 25 dime 10 nickel 5 or penny 1. then it is asking what is the receivd and due inputs - minus and = to * times 100,25,10,5,1 which will say how many of each kind of change I will get back. DONE

    //then i need to add a form with ids for each currency amount and have an output on the page to display the results. DONE
}






