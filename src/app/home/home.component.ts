import { Component, OnInit } from '@angular/core';
import {HomeService} from '../services/home/home.service';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginform: FormGroup ;
  pass_user: boolean = false;
  uploadAlert: boolean;
  fileToUpload: any;
  failurealert: boolean;
  successResponse: any;
  successalert: boolean;
  failureResponse: any;
  quickUpload: boolean = false;
  multipleAngazaId: any[] = [];
  angazaId: string = '';
  angazaId_user: boolean = false;
  Title: string = '';
  title_user: boolean = false;
  Body: string = '';
  body_user: boolean = false;
  imgPath: string = '';
  imgPath_user = false;
  message:string = '';
  successAlert:boolean = false;
  loading = false;
  macCheck: any = false;
  mobileCheck:boolean = true;
  constructor(private deviceService: DeviceDetectorService,
    private _router : Router,
    private service: HomeService,
     public formbuilder: FormBuilder) { 
    var logininfo: any = JSON.parse(localStorage.getItem('loginInfo'));
    const isMobile = this.deviceService.isMobile();
    if(isMobile){
      this.mobileCheck = false;
    }
    this.macCheck = false;
    var isMacLike = /(Mac|iPhone|iPod|iPad|MAC|MacIntel)/i.test(navigator.platform);
    if (isMacLike) this.macCheck = true;
    if (!logininfo || logininfo.role != 'BRANCH' && logininfo.role != 'HO') {
      this._router.navigate(['login']);
    }
    this.loginform = this.formbuilder.group({
      angazaId:[''],
      title:['',[Validators.required]],
      body:['',[Validators.required]],
      imgPath:[''],
   });
  }

  ngOnInit() {
  }
  removeAngazaId(index){
    console.log(index);
    this.multipleAngazaId.splice(index, 1);
    console.log(this.multipleAngazaId);
  }
  addAngazaId(){
    console.log(this.angazaId);
    if(this.angazaId){
      this.multipleAngazaId.push( this.angazaId);
      this.angazaId = '';
    }else{
      alert('Please Enter the Valid Angaza Id');
    }
    console.log(this.multipleAngazaId);
  }
  login( angazaId ){
    this.loading = true;
    let sendJsonData = []
    console.log(this.multipleAngazaId)
    //	let obj = {: email, password: password};
    console.log(this.loginform);
    if(this.loginform.invalid || this.multipleAngazaId.length == 0 ){
      this.angazaId_user = true;
      this.loading = false;
      this.title_user = true;
      this.body_user = true;
      this.imgPath_user = true;
      return;
    }else{
      for(let i=0; i < this.multipleAngazaId.length; i++){
        sendJsonData.push( {
          "angazaId": this.multipleAngazaId[i],
          "bigContentTitle": this.Title,
          "body": this.Body,
          "image": this.imgPath,
          "module": "TEST",
          "activityId": "789"
        })
      }
      console.log(sendJsonData);
      this.service.notificationCalljson(sendJsonData)
      .then((result:any) => {
        this.message = result.ResponseData.message;
        this.successAlert = true;
        this.loading = false;
        setTimeout(() => {
          this.successAlert = false;
          this.message = '';
        }, 3000);
        console.log(result);
        }, (err) => {
        console.log(err);
        this.loading = false;
        //alert(err.error.Error.MessageToUser);
      });
    }
 }
  quickUploadConent(){
  this.quickUpload = true;
  this.multipleAngazaId = [];
  this.angazaId = '';
  this.angazaId_user = false;
  this.Title = '';
  this.title_user = false;
  this.Body = '';
  this.body_user = false;
  this.imgPath = '';
  this.imgPath_user = false;
  this.message = '';
  this.successAlert= false;
  }
  handleFile(files: FileList) {
   // this.loading = true;
    this.failurealert = false;
    if( files &&files[0].type == "application/vnd.ms-excel"){
      this.fileToUpload = files.item(0);
      //this.alerts = false;
    }
    else{
      this.fileToUpload = undefined;
      alert("Please upload a file in correct format (CSV)");
    }
  }
  handleFileInput() {
    this.loading = true;
    this.uploadAlert = false;
    if(!this.fileToUpload){
      this.loading = false;
      setTimeout(() => {
        alert("Please choose a file to upload");
      }, 500);
    } 
    else {
      this.loading = true;
      console.log(this.loading);
      this.service.notificationCallfile(this.fileToUpload)
      .then((data:any)=>{
        this.loading = true;
        console.log(data);
        this.message = data.ResponseData.message;
        this.successAlert = true;
        console.log(this.loading);
        //this.fileToUpload = {};
        this.loading = false;
        console.log(this.loading);
        // setTimeout(() => {
        //   this.successAlert = false;
        // }, 3000);
      },(error:any)=>{
       // var errorsMessage =error.error.Error.MessageToUser; 
        console.log(error);
        this.loading = false;
        setTimeout(() => {
          alert(error.error.Error.MessageToUser);
        }, 500);
        
       // alert(errorsMessage);
      }).catch(error => 
        console.log(error));
       // this.loading = false;
      }//else
  }
  demoCheck(event){
    console.log(event);
    if(event == " "){
      console.log("in");
      if(this.angazaId){
        console.log(this.angazaId);
      this.multipleAngazaId.push( this.angazaId);
      this.angazaId = '';
    }else{
      alert('Please Enter the Valid Angaza Id');
    }
    }
    console.log(this.multipleAngazaId);
  }
}
