import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CharactersComponent} from "./pages/characters/characters.component";
import {CharactersShowComponent} from "./pages/characters/characters-show/characters-show.component";


const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/:id', component: CharactersShowComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
