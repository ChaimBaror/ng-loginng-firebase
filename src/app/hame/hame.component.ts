import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../cord/User';

@Component({
  selector: 'cb-hame',
  templateUrl: './hame.component.html',
  styles: [
  ]
})
export class HameComponent implements OnInit {
  private authSer: AuthService;

  currentUser: Observable<User>;


  constructor(authSer: AuthService) { 
  this.authSer = authSer;
  }
  ngOnInit(): void {
    this.currentUser = this.authSer.currentUser$;
  }
  signInGoogle() {
    this.authSer.signInWithGoogle();
  }
  signOut() {
    this.authSer.signOut();
  }

}
