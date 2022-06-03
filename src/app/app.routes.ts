import { Routes } from "@angular/router";
import { DocumentationComponent } from "./components/documentation/documentation.component";

export const APP_ROUTES: Routes =[
    {path: '',component: DocumentationComponent},
    {path: 'directives',loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule)},
    {path: 'pipes', loadChildren: () => import('./pipes/pipe-documentation/pipe-routing.module').then(m => m.PipeRoutingModule)},
    {path: 'services',loadChildren: () => import('./services/services.module').then(m => m.ServicesModule)},
    {path: '', redirectTo: '', pathMatch: 'full'}
]