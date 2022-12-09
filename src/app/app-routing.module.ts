import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'contenido-clase',
    loadChildren: () => import('./contenido-clase/contenido-clase.module').then( m => m.ContenidoClasePageModule)
  },
  {
    path: 'contenido1',
    loadChildren: () => import('./contenido1/contenido1.module').then( m => m.Contenido1PageModule)
  },
  {
    path: 'contenido2',
    loadChildren: () => import('./contenido2/contenido2.module').then( m => m.Contenido2PageModule)
  },
  {
    path: 'contenido3',
    loadChildren: () => import('./contenido3/contenido3.module').then( m => m.Contenido3PageModule)
  },
  {
    path: 'contenido4',
    loadChildren: () => import('./contenido4/contenido4.module').then( m => m.Contenido4PageModule)
  },
  {
    path: 'contenido5',
    loadChildren: () => import('./contenido5/contenido5.module').then( m => m.Contenido5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
