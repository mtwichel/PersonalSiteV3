import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

  @Input() project;

  dateString: string;

  constructor(private db: AngularFirestore, private http: HttpClient, private storage: AngularFireStorage) { }

  ngOnInit() {
    if (this.project.githubRepo) {
      this.getGithubLastUpdated();
    }
  }

  getGithubLastUpdated() {
    this.http.get(`https://api.github.com/repos/mtwichel/${this.project.githubRepo}/commits`).subscribe(obj => {
      const dateString = obj[0].commit.author.date;
      const date = new Date(dateString);
      console.log(date.toString());
      this.dateString = `${date.getMonth() + 1}.${date.getDate()}.${date.getFullYear().toString().substring(2)}`;
    });
  }
}
