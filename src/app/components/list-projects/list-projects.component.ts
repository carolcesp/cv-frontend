import { Component, OnInit } from '@angular/core';
import { Project } from './../../models/project';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-list-projects',
  templateUrl: './list-projects.component.html',
  styleUrls: ['./list-projects.component.scss']
})
export class ListProjectsComponent implements OnInit {

  listProjects: Project[];

  constructor(private projectsService: ProjectsService) {  }

  ngOnInit(): void {
    this.getListProjects();
  }

  async getListProjects() {
    this.listProjects = await this.projectsService.getAllProjects();
    console.log('>> listProjects',this.listProjects)
  }

}
