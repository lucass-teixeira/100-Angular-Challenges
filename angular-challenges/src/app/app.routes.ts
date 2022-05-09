import { Route } from "@angular/router";
import { DocumentationComponent } from "./components/documentation/documentation.component";
import { DirectiveDocumentationComponent } from "./directives/directive-documentation/directive-documentation.component";
import { PipeDocumentationComponent } from "./pipes/pipe-documentation/pipe-documentation.component";
import { ServiceDocumentationComponent } from "./services/service-documentation/service-documentation.component";

export const APP_ROUTES: Route[] =[
    {path: '',component: DocumentationComponent},
    {path: 'directives',component: DirectiveDocumentationComponent},
    {path: 'pipes',component: PipeDocumentationComponent},
    {path: 'services',component: ServiceDocumentationComponent},
]