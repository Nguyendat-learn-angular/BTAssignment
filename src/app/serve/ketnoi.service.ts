import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class KetnoiService {

  url="./assets/Students.js";
  url1="./assets/Subjects.js";
  url2="./assets/Quizs/ADAV.js";
  url3="./assets/Quizs/ADBS.js";
  url4="./assets/Quizs/ADTE.js";
  url5="./assets/Quizs/ADUI.js";
  constructor(private http:HttpClient) { }
  getStudent(){
    return this.http.get(this.url);
  }
  getSubjects(){
    return this.http.get(this.url1);
  }
  getADAV(){
    return this.http.get(this.url2);
  }
  getADBS(){
    return this.http.get(this.url3);
  }
  getADTE(){
    return this.http.get(this.url4);
  }
  getADUI(){
    return this.http.get(this.url5);
  }
  
}
