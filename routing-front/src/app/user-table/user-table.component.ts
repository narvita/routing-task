import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UserInterface } from 'src/interfaces/user.interface';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit, OnDestroy{
  public user!: UserInterface;
  public id = 2;
  private unsubscraber$ = new Subject<null>;


  constructor(private usersService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(() => {
      this.id = this.activatedRoute.snapshot.params['id'];
    });
    console.log(this.id, 'id');
    
    this.getUser(this.id);
  }

  public getUser(id: number){
    this.usersService.getUser(id)
    .pipe(takeUntil(this.unsubscraber$))
    .subscribe((data) => this.user = data);
    console.log(this.user);
  }

  ngOnDestroy(): void {
    this.unsubscraber$.next(null);
    this.unsubscraber$.complete();
  }
}
