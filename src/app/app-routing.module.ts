import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { BiografiaComponent } from './biografia/biografia.component';
import { BibliotecaComponent } from './biblioteca/biblioteca.component';
import { AgendaComponent } from './agenda/agenda.component';
import { MusicasComponent } from './musicas/musicas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contatos', component: ContatoComponent},
  {path: 'biografia', component: BiografiaComponent},
  {path: 'biblioteca', component: BibliotecaComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'musicas', component: MusicasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
