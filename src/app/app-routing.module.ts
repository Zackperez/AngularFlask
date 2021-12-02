import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { ContactenosComponent } from './paginas/contactenos/contactenos.component';
const routes: Routes = [
  
  {path:'principal',component:PrincipalComponent},
  {path:'contactenos',component:ContactenosComponent},
  {path:'',redirectTo:'/principal',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
