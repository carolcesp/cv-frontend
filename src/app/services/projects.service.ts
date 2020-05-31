import { Injectable } from '@angular/core';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})

export class ProjectsService {

  listProjects: Project[];

  constructor() {

    this.listProjects = new Array ({
      name: 'Carolinna',
      description: 'Mi curriculum',
      images: [],
      url: 'http://www.carolina.es',
      year: 2020,
      client: 'caroline',
      urlClient: 'http://www.carolina.es',
      categories: 'web',
      tecnologies: 'Angular and NodeJs'
    })
  }

  getProjects() {
      return this.listProjects;
  }
}
