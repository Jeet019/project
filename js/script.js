function fun1(){
    var name = frm1.name.value;
    var gender = frm1.gender.value;
    var cource = frm1.cource.value;
    var remark = frm1.remark.value;
    alert("Name: "+name+"\nGender: "+gender+"\nCource: "+cource+"\nRemark: "+remark);
}

function f2(){
    var maths=Number(frm2.maths.value);
    var english=Number(frm2.English.value);
    var  science=Number(frm2.Science.value);
    frm2.total.value=((maths+english+science)/300)*100;
    return false;
}  


function f3(){
    alert("Your bonus is 30% of Salarty");
}
function f4(){
    alert("Your bonus is 10% of salary");
}
function f5(){
    alert("No Bonus");
}

function s(){
     var salary=Number(frm3.salary.value);
     var perform = frm3.perform.value;
    
     if (perform=="A"){
        frm3.totalsal.value=salary*0.3;
        f3();
     }
     if (perform == "B") {
         frm3.totalsal.value=salary*0.10;
         f4();
         }
    if (perform== "C") {
            frm3.totalsal.value=salary;
            f5();
    }
   
}

function test(){
    var ans1=tf.o1.value;
    var  r1=0;
    if(document.getElementById("ans1").checked ==true){
        r1+=2;
    }
    if(document.getElementById("ans2").checked ==true){
        r1+=2;
    }

    alert(r1+"Your result");
}

function w1(){
    window.open("window.html","",height=600,width=800)
}
