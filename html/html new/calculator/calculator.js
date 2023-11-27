var button=document.getElementsByTagName('button');
var dis=document.getElementById('display1')
var operand1=0;
var operand2=null;
var operator=null;
var opt1=null;
var opt2=null;
for (var i=0;i<button.length;i++){
    button[i].addEventListener('click',function(){
        var value=this.getAttribute('value');
        if(value=='+'){
            operator='+';
            operand1=parseFloat(dis.textContent);
            opt1+=operand1;
            dis.innerText="";
        }
        else if(value=='-'){
            operator='-';
            operand1=parseFloat(dis.textContent);
            opt1+=operand1;
            dis.innerText="";
            
        }
        else if(value=='*'){
            operator='*';
            operand1=parseFloat(dis.textContent);
            opt1+=operand1;
            dis.innerText="";
        }
        else if(value=='/'){
            operator='/';
            operand1=parseFloat(dis.textContent);
            opt1+=operand1;
            dis.innerText="";
        }
        else if(value=='%'){
            operator='%';
            operand1=parseFloat(dis.textContent);
            opt1+=operand1;
            dis.innerText="";
        }
        else if(value=="AC"){
            opt1=0;
            opt2=null;
            operator=null;
            dis.innerText=""; 
        }
        else if(value=="AC"){
            opt1=0;
            opt2=null;
            operator=null;
            dis.innerText=""; 
        }
        else if(value=="+/-"){
            if(operator=="+"){
                operator="-";
            }else{operator="+"}
        }
        else if(value=="="){
            operand2=parseFloat(dis.textContent);
            opt2+=operand2;
            console.log(opt1);
            console.log(opt2);
            var result=eval(opt1+" "+operator+""+opt2);
           dis.innerText=result;
        }
        else{
            dis.innerText+=value
        }
    })
}