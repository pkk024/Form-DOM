function myFunction(){
    var tbl=document.getElementById("myTable");
    var row=tbl.insertRow();
    var cell1=row.insertCell();
    var cell2=row.insertCell();
    var cell3=row.insertCell();
    var cell4=row.insertCell();
    var cell5=row.insertCell();
    var cell6=row.insertCell();
    var cell7=row.insertCell();
    var cell8=row.insertCell();
    var txt="";
    var checkBoxlength;
    function check(){
        var p1=document.forms[0];
        
        
        for(var i=0;i<p1.length;i++)
        if(p1[i].checked){
checkBoxlength++;
    txt=txt+p1[i].value+",";
   
    
        }
    }
    
    
    check();
   
   
cell1.innerHTML=document.getElementById("Firstname").value;
cell2.innerHTML=document.getElementById("Lastname").value;
cell3.innerHTML=document.getElementById("Address").value;
cell4.innerHTML=document.getElementById("number").value;
cell5.innerHTML=document.getElementById("Gender").value;


cell6.innerHTML=txt;
cell7.innerHTML=document.getElementById("state").value;
cell8.innerHTML=document.getElementById("country").value;



document.getElementById("myForm").reset();


}