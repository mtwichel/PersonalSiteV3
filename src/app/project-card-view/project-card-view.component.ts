import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-card-view',
  templateUrl: './project-card-view.component.html',
  styleUrls: ['./project-card-view.component.scss']
})
export class ProjectCardViewComponent implements OnInit {

  projects: Observable<any[]>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.projects = this.db.collection('projects').valueChanges();
  }
}
