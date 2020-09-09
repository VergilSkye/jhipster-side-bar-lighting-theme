import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/user/account.model';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ProfileService } from 'app/layouts/profiles/profile.service';

@Component({
  selector: 'jhi-lighting-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['sidebar.scss'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: 0.5,
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
          opacity: 1,
        })
      ),
      transition('initial=>final', animate('400ms')),
      transition('final=>initial', animate('400ms')),
    ]),
  ],
})
export class LightingSidebarComponent implements OnInit {
  currentAccount: Account | null = null;
  isCollapsed1 = false;
  swaggerEnabled?: boolean;
  inProduction?: boolean;
  constructor(private accountService: AccountService, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.isCollapsed1 = true;
    this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
  }

  isAuthenticated(): boolean {
    return this.accountService.isAuthenticated();
  }
}
