import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Teacher } from '../models/teacher';
import {HttpHeaders} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  
  readonly URL_API = 'http://localhost:3000/api/teachers';
  selectedTeacher: Teacher;
  teachers: Teacher[];


  constructor(private http: HttpClient) {
    this.selectedTeacher = new Teacher();
   }

  getTeachers(){
    const httpOptions = {
      headers: new HttpHeaders({
          'Content-Type':'aplication/json',
          'Authorization':localStorage.getItem('token')
      })
    };
  
    return this.http.get(this.URL_API);
  }

  createTeacher(teacher: Teacher){
    return this.http.post(this.URL_API, teacher);
  }

  editTeacher(teacher: Teacher){
    return this.http.put(this.URL_API+`/${teacher._id}`, teacher);
  }

  deleteTeacher(_id: String){
    return this.http.delete(this.URL_API+`/${_id}`);
  }
}

