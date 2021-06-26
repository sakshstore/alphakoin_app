import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'support',
    loadChildren: () => import('./pages/support/support.module').then( m => m.SupportPageModule)
  },
  {
    path: 'send-coin',
    loadChildren: () => import('./pages/send-coin/send-coin.module').then( m => m.SendCoinPageModule)
  },
  {
    path: 'buy-coin',
    loadChildren: () => import('./pages/buy-coin/buy-coin.module').then( m => m.BuyCoinPageModule)
  },
  {
    path: 'ticket-list',
    loadChildren: () => import('./pages/ticket-list/ticket-list.module').then( m => m.TicketListPageModule)
  },
  {
    path: 'ticket-message-list',
    loadChildren: () => import('./pages/ticket-message-list/ticket-message-list.module').then( m => m.TicketMessageListPageModule)
  },
  {
    path: 'add-ticket-message',
    loadChildren: () => import('./pages/add-ticket-message/add-ticket-message.module').then( m => m.AddTicketMessagePageModule)
  },
  {
    path: 'two-factor-authentication',
    loadChildren: () => import('./pages/two-factor-authentication/two-factor-authentication.module').then( m => m.TwoFactorAuthenticationPageModule)
  },
  {
    path: 'transactions',
    loadChildren: () => import('./pages/transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'setting',
    loadChildren: () => import('./pages/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./pages/change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
