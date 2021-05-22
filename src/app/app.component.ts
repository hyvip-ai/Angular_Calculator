import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component } from '@angular/core';
import { execFile } from 'child_process';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  istrue = true;
 value= "" ;
 op1  = 0;
 op2=0;
 char = "";
  dip1(){
    this.value = this.value +"1";
   if(this.char==""){
    this.op1 = this.op1*10 + 1;
   }
   else{
    this.op2 = this.op2*10 + 1;
   }
  }
  dip2(){
    this.value = this.value +"2";
    if(this.char==""){
      this.op1 = this.op1*10 + 2;
     }
     else{
      this.op2 = this.op2*10 + 2;
     }
    
  }
  dip3(){
    this.value = this.value +"3";
    if(this.char==""){
      this.op1 = this.op1*10 + 3;
     }
     else{
      this.op2 = this.op2*10 + 3;
     }
    
  }

  dip4(){
    this.value = this.value +"4";
    if(this.char==""){
      this.op1 = this.op1*10 + 4;
     }
     else{
      this.op2 = this.op2*10 + 4;
     }
    
  }

  dip5(){
    this.value =this.value + "5";
    if(this.char==""){
      this.op1 = this.op1*10 + 5;
     }
     else{
      this.op2 = this.op2*10 + 5;
     }
    
  }

  dip6(){
    this.value =this.value + "6";
    if(this.char==""){
      this.op1 = this.op1*10 + 6;
     }
     else{
      this.op2 = this.op2*10 + 6;
     }
    
  }

  dip7(){
    this.value = this.value +"7";
    if(this.char==""){
      this.op1 = this.op1*10 +7;
     }
     else{
      this.op2 = this.op2*10 + 7;
     }
    
  }

  dip8(){
    this.value =this.value + "8";
    if(this.char==""){
      this.op1 = this.op1*10 + 8;
     }
     else{
      this.op2 = this.op2*10 + 8;
     }
    
  }
  dip9(){
    this.value = this.value +"9";
    if(this.char==""){
      this.op1 = this.op1*10 + 9;
     }
     else{
      this.op2 = this.op2*10 + 9;
     }
    
  }
  dip0(){
    this.value = this.value + "0";
    if(this.char==""){
      this.op1 = this.op1*10 + 0;
     }
     else{
      this.op2 = this.op2*10 + 0;
     }
    
  }

  dipplus(){
    console.log(this.op1);
    this.char = "+";
    this.value="";

  }
  dipmin(){
    console.log(this.op1);
    this.char = "-";
    this.value="";
  }
  dipmul(){
    console.log(this.op1);
    this.char = "*";
    this.value = "";
  }
  dipdiv(){
    console.log(this.op1);
    this.char="/";
    this.value="";
  }
  dipen(){
    console.log(this.op2);
    if(this.char=="+"){
      this.op1 = this.op1 + this.op2;
      this.value = String(this.op1);
      
    }
    else if(this.char=="-"){
      this.op1 = this.op1 - this.op2;
      this.value = String(this.op1);
    }
    else if(this.char == "*"){
      this.op1 = this.op1 * this.op2;
      this.value = String(this.op1);
    }
    else if(this.char == "/"){
      this.op1 = this.op1 / this.op2;
      this.value = String(this.op1);
    }
    this.op2 = 0;
  }
  dipsq(){
    this.op1 = this.op1 * this.op1;
    this.value = String(this.op1);
  }



}
