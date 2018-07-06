import { Component, OnInit } from '@angular/core';
// import { WSAVERNOTSUPPORTED } from 'constants';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css']
})
export class ToDOListComponent implements OnInit {
  entry='';
  childNo:number;
  entries=[];
  state=[];
  userName = localStorage.getItem("username");
 
  
  addNewEntry(){
    // let p= this.checkInput;
    if(this.entry===""){
      alert("pls write something in the given space");
     }
     else if (this.entries.indexOf(this.entry) > -1) {
      alert ('This exists already');
      return false;
    }
    else{
      this.entries.push(this.entry);
      this.entry="";
      this.state.push("false");
      console.log(this.state);
    }     
  }
 
  removeEntry(remove){
    let rem = this.entries.indexOf(remove);
    this.entries.splice(rem,1);
    // console.log(remove);   
  }
  changeColor(pa){
    if(pa.control.value==false){
      let col = document.getElementsByTagName("p")[this.entries.indexOf(pa.name)];
      col.style.color="#28a745";
      col.style.textDecoration="line-through";
      this.state.splice(this.entries.indexOf(pa.name),1,"true");
      console.log(this.state);
    }
    else{
      let col = document.getElementsByTagName("p")[this.entries.indexOf(pa.name)];
      col.style.color="rgb(255, 0, 0)";
      col.style.textDecoration="none";
      this.state.splice(this.entries.indexOf(pa.name),1,"false");
      console.log(this.state);
    }
  }
  
  replaceEntry(){
    if(this.entry===""){
      alert("pls write something in the given space");
      return false;
     }
     else if (this.entries.indexOf(this.entry) > -1) {
      alert ('This exists already');
      return false;
    }
    this.entries.splice((this.childNo-1),1,this.entry);
    this.entry="";
    document.getElementById("replace_alert").style.display="none";
  }

  popUpBox(){
    document.getElementById("replace_alert").style.display="block";
  }

  editText(){
    this.entry="Add text to replace entry";
    
  }

  constructor() { }

  ngOnInit() {
    this.userName=JSON.parse(this.userName);
    let oldEntries = localStorage.getItem(this.userName);
    oldEntries=JSON.parse(oldEntries);
    // console.log(onState);
    // console.log(oldEntries);
    if (oldEntries!=null){
      let a = oldEntries.length;
      let r =confirm("it's seems you have a saved session, please press ok to load or cancel to reset")
      if ( r==true){
        let i:number;
        for(i=0;i<a;i++ ){
        this.entries.push(oldEntries[i]);
        }
      }
      else{
        alert("welcome "+ this.userName);
      }
    }
    else{
      alert("welcome "+ this.userName);
    }
  }
  ngAfterViewInit(){
    let onState=localStorage.getItem(this.userName + "1");
    onState=JSON.parse(onState);
    let a = onState.length;
    let i:number;
    for(i=0;i<a;i++ ){
      this.state.push(onState[i]);
      let check = document.getElementsByTagName("input")[i];
      if(onState[i]=="true"){
        let col = document.getElementsByTagName("p")[i];
        col.style.color="#28a745";
        col.style.textDecoration="line-through";
      }
      else{
        let col = document.getElementsByTagName("p")[i];
        col.style.color="rgb(255, 0, 0)";
        col.style.textDecoration="none";
      }
    }

  }
  save(){
    localStorage.setItem(this.userName, JSON.stringify(this.entries));
    localStorage.setItem(this.userName + "1", JSON.stringify(this.state));
    alert("your session has been saved");
  }
  // load(){
  //   let oldEntries=localStorage.getItem("name");
  //   oldEntries=JSON.parse(oldEntries);
  //   console.log(oldEntries[0]);
  //   let a = oldEntries.length;
  //   let i:number;
  //   for(i=0;i<a;i++ )
  //   this.entries.push(oldEntries[i]);
  // }
}

