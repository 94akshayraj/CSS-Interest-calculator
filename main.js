< !DOCTYPE html >
    <
    html >
    <
    head >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    style >
    *
    {
        box - sizing: border - box;
    }



[class *= "col-"] {
    float: left;
    padding: 15 px;
    border: 1 px white;
}

table, th, td {
    border: 1 px solid black;
}

.col - 1 {
        width: 25 % ;
    }
    .col - 2 {
        width: 25 % ;
    }
    .col - 3 {
        width: 50 % ;
    }

    <
    /style> <
    /head> <
    body >


    <
    div class = "row" >
    <
    div class = "col-1" >
    <
    h1 style = "font-size:100%;" > Enter Loan Data: < /h1>
Loan Amount(Rs):
    <
    br > < br >
    Annual Interest( % ):
    <
    br > < br >
    Repayment period(years):
    <
    br > < br >
    Post code:
    <
    br >
    <
    h1 style = "font-size:100%;" > Payment: < /h1> <
    br > < br >
    Monthly Payment(Rs):
    <
    br > < br >
    Total Payment(Rs):
    <
    br > < br >
    Total Interest(Rs):
    <
    br > < br >

    <
    table id = "Table1" >
    <
    tr >
    <
    th > Loan Amount < /th> <
    th > Interest % < /th> <
    th > Payment Period < /th> <
    th > Postcode < /th> <
    th > Monthly Payment < /th> <
    th > Total Payment < /th> <
    th > Total Interest < /th> <
    /tr> <
    /table> <
    /div>

    <
    script type = "text/javascript" >
    function doMath() {
        var inputNum1 = Number(document.form1.loanAmount.value);
        var inputNum2 = Number(document.form1.interest.value);
        var inputNum3 = Number(document.form1.period.value);
        var inputNum4 = Number(document.form1.postCode.value);
        var TI = (inputNum1 * inputNum2 * inputNum3) / 100;
        var TP = TI + inputNum1;
        var MP = TP / 10 * 12;


        document.getElementById("answerMP").innerHTML = Number((MP).toFixed(1));
        document.getElementById("answerTP").innerHTML = Number((TP).toFixed(1));
        document.getElementById("answerTI").innerHTML = Number((TI).toFixed(1));
        var tableRef = document.getElementById("Table1");
        var newRow = tableRef.insertRow(-1);
        var newCell1 = newRow.insertCell(0);
        var newText = document.createTextNode(inputNum1);
        newCell1.appendChild(newText);
        var newCell2 = newRow.insertCell(1);
        var newText = document.createTextNode(inputNum2);
        newCell2.appendChild(newText);
        var newCell3 = newRow.insertCell(2);
        var newText = document.createTextNode(inputNum3);
        newCell3.appendChild(newText);
        var newCell4 = newRow.insertCell(3);
        var newText = document.createTextNode(inputNum4);
        newCell4.appendChild(newText);
        var newCell5 = newRow.insertCell(4);
        var newText = document.createTextNode((MP).toFixed(1));
        newCell5.appendChild(newText);
        var newCell6 = newRow.insertCell(5);
        var newText = document.createTextNode((TP).toFixed(1));
        newCell6.appendChild(newText);
        var newCell7 = newRow.insertCell(6);
        var newText = document.createTextNode((TI).toFixed(1));
        newCell7.appendChild(newText);

        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");

        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.lineTo(500, 300 - TP);
        ctx.lineTo(500, 300);
        ctx.closePath();
        ctx.fillStyle = "violet";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.lineTo(500, 300 - TP);
        ctx.lineTo(500, 300);
        ctx.closePath();
        ctx.fillStyle = "violet";
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 300);
        ctx.lineTo(500, 300 - TP);
        ctx.lineTo(500, 300);
        ctx.closePath();
        ctx.fillStyle = "violet";
        ctx.fill();

    }


    <
    /script>

    <
    div class = "col-2" >
    <
    form name = "form1" >
    <
    br > < br >
    <
    input type = "number"
name = "loanAmount"
value = "100" > < br > < br >
    <
    input type = "number"
name = "interest"
value = "10" > < br > < br >
    <
    input type = "number"
name = "period"
value = "10" > < br > < br >
    <
    input type = "number"
name = "postCode"
value = "673020" > < br > < br >
    <
    button type = "button"
onclick = "doMath()" > Calculate < /button>       <
    /form> <
    br > < br >
    <
    p id = "answerMP" > < /p> <
    p id = "answerTP" > < /p> <
    p id = "answerTI" > < /p> <
    /div>

    <
    div class = "col-3" >
    <
    h1 style = "font-size:100%;" > Balance, Loan, Pricipal and Interest < /h1>

    <
    canvas id = "myCanvas"
width = "500"
height = "300"
style = "border:1px solid #d3d3d3;" >
    Your browser does not support the HTML5 canvas tag. < /canvas> <
    /div>


    <
    /body> <
    /html>
