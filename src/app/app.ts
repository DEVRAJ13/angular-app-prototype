import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatTabsModule, MatIconModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('Debu.');
  showTabs: boolean = false;
  constructor(private readonly breakpointObserver: BreakpointObserver, private router: Router){}
  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.showTabs = result.matches;
    });  
  }

    anotherpage1(){
    this.router.navigate(['home']);
  }

  anotherpage(){
    this.router.navigate(['categories']);
  }
  
   anotherpage2(){
    this.router.navigate(['offers']);
  }
}
