import { Component, OnInit } from '@angular/core';
import Speech from 'speak-tts';

@Component({
  selector: 'app-abc',
  templateUrl: './abc.component.html',
  styleUrls: ['./abc.component.css']
})
export class AbcComponent implements OnInit {
  public silabas: string [][];
  public linhas:Array<number>;
  public colunas:Array<number>;
  public audio = new Audio();
  
  constructor() { 
    this.silabas = 
    [
      ["*", "A","E","I","O","U"],
      ["B", "BA","BE","BI","BO","BU"],
      ["C", "CA","CE","CI","CO","CU"],
      ["D", "DA","DE","DI","DO","DU"],
      ["F", "FA","FE","FI","FO","FU"],
      ["G", "GA","GE","GI","GO","GU"],
      ["J", "JA","JE","JI","JO","JU"],
      ["L", "LA","LE","LI","LO","LU"],
      ["M", "MA","ME","MI","MO","MU"],
      ["N", "NA","NE","NI","NO","NU"],
      ["P", "PA","PE","PI","PO","PU"],
      ["R", "RA","RE","RI","RO","RU"],
      ["S", "SA","SE","SI","SO","SU"],
      ["T", "TA","TE","TI","TO","TU"],
      ["V", "VA","VE","VI","VO","VU"],
      ["X", "XA","XE","XI","XO","XU"],
      ["Z", "ZA","ZE","ZI","ZO","ZU"]
    ];
    this.vetoresAux();
  }
  ngOnInit(): void {
  }

  public vetoresAux(): void{
    this.linhas = new Array();
    this.colunas = new Array();
    for(var i = 0; i < this.silabas.length; i++){
      this.linhas.push(i);
    }
    for(var i = 0; i < this.silabas[0].length; i++){
      this.colunas.push(i);
    }
  }

  public teste(silaba:string){
    const speech = new Speech();
    var audio = new Audio();
    audio.src = 'https://translate.google.com/#view=home&op=translate&sl=pt&tl=en&text=teste.';
    audio.play();

    speech.speak({
          text: silaba,
      }).then(() => {
          console.log("Success !")
      }).catch(e => {
          console.error("An error occurred :", e)
      })
    }
}
