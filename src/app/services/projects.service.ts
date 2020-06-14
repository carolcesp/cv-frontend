import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  listProjects: Project[];
  baseUrl: string;
  tokenUrl: String;
  projectsUrl: String;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'https://cv-back-carol.herokuapp.com/';
    this.tokenUrl = 'api/token';
    this.projectsUrl = 'api/proyectos';

    this.getToken();
  }

  getToken(): void {
    let objectToken: any;
    this.httpClient.get(this.baseUrl + this.tokenUrl).subscribe( data => {
      objectToken = data;
      localStorage.setItem('token',objectToken.token);
    })
  }

  getAllProjects() : Promise<Project[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'access-token': localStorage.getItem('token')
      })
    };
    return this.httpClient.get<Project[]>(this.baseUrl + this.projectsUrl, httpOptions).toPromise()
  }
}
