<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        #box{
            width: 310px;
            border: 3px solid green;
            padding: 30px;
            margin: auto;
            background-color: rgb(230, 248, 212);
            box-shadow: 2px 2px 10px 10px lightseagreen;
            margin-top: 20px;
            border-radius: 20px;
            
           
            
        }
        #textbox{
            width: 300px;
            height: 55px;
            border: 2px solid royalblue;
            box-shadow: .5px .5px 10px 10px lightgray;
            font-weight: bold;
            font-size: 30px;
            
        }
        button{
            width: 50px;
            height: 50px;
            margin: 10px;
            background-color: rgb(232, 219, 219);
            box-shadow:.5px .5px 10px 5px lightblue;
            font-size: 25px;
            border: none;
            border-radius: 5px;
            
        }

    </style>
    <script>
        function dataRemove()
        {
            let a=document.getElementById('textbox').value;
            let mylen=a.length;
            let ans=a.slice(0,mylen-1);
            document.getElementById('textbox').value=ans;
        }
    </script>
</head>
<body bgcolor="light">
    
    <div id="box">
        <input type="text" id="textbox">
        <button id="btn1" onclick="document.getElementById('textbox').value+=document.getElementById('btn1').innerHTML">1</button>
        <button id="btn2" onclick="document.getElementById('textbox').value+=document.getElementById('btn2').innerHTML" >2</button>
        <button id="btn3" onclick="document.getElementById('textbox').value+=document.getElementById('btn3').innerHTML">3</button>
        <button id="btn4" onclick="document.getElementById('textbox').value+=document.getElementById('btn4').innerHTML">4</button>
        <button id="btn5" onclick="document.getElementById('textbox').value+=document.getElementById('btn5').innerHTML">5</button>
        <button id="btn6" onclick="document.getElementById('textbox').value+=document.getElementById('btn6').innerHTML">6</button>
        <button id="btn7" onclick="document.getElementById('textbox').value+=document.getElementById('btn7').innerHTML">7</button>
        <button id="btn8" onclick="document.getElementById('textbox').value+=document.getElementById('btn8').innerHTML">8</button>
        <button id="btn9" onclick="document.getElementById('textbox').value+=document.getElementById('btn9').innerHTML">9</button>
        <button id="btn0" onclick="document.getElementById('textbox').value+=document.getElementById('btn0').innerHTML">0</button>
        <button id="btnplas" onclick="document.getElementById('textbox').value+=document.getElementById('btnplas').innerHTML">+</button>
        <button id="btnminus" onclick="document.getElementById('textbox').value+=document.getElementById('btnminus').innerHTML">-</button>
        <button id="btnmult" onclick="document.getElementById('textbox').value+=document.getElementById('btnmult').innerHTML">*</button>
        <button id="btndiv" onclick="document.getElementById('textbox').value+=document.getElementById('btndiv').innerHTML">/</button>
        <button id="btnmod" onclick="document.getElementById('textbox').value+=document.getElementById('btnmod').innerHTML">%</button>
        <button onclick="document.getElementById('textbox').value=eval(document.getElementById('textbox').value)"> = </button>
        <button id="btnclear" onclick="document.getElementById('textbox').value=' '" >AC</button>
        <button onclick="dataRemove()">X</button>
    </div>
</body>
</html>
