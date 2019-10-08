import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  // tslint:disable-next-line:variable-name
  @Input() created_at: Date;



  constructor() { }

  ngOnInit() {
  }
  onLike() {
    this.loveIts = this.loveIts + 1;
  }
  onDisLike() {
    this.loveIts = this.loveIts - 1;
  }
  getColor() {
    if (this.loveIts > 0) {
      return 'rgb(0, 255, 64,0.40)';
    } else if (this.loveIts < 0 ) {
      return 'rgba(220,53,69,0.36)';
    }
  }
}
