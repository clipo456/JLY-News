import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  ionicForm= FormGroup;
  datas: any= [];
  queryText: String;
  pesquisa: Array<{titulo: string}>;
  allTitulos: any;

  constructor(public formBuilder: FormBuilder,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public _apiService: ApiService) {
      this.getNoticias();
      this.queryText= '';
      this.pesquisa = this.datas.titulo;
      this.pesquisa = this.allTitulos;
    }
    
    getNoticias(){
      this._apiService.getDatas().subscribe((res: any) => {
        console.log("Sucesso", res);
        this.datas=res;
        console.log(this.datas);
      }, (error:any) => {
        console.log("Erro", error);
      })
    }

    filterNoticia(not:any){
      let val = not.target.value;
      if(val && val.trim() != ''){
        this.pesquisa = _.values(this.allTitulos);
        this.pesquisa = this.pesquisa.filter((noticia) => {
          return(noticia.titulo.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } else {
        this.pesquisa = this.allTitulos;
      }
    }
    
    ngOnInit(){
      
    }
}
