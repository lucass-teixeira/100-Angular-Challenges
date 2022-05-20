import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpipeComponent } from '../cardpipe/cardpipe.component';
import { TruncatePipe } from '../truncate/truncate.pipe';
import { PipeDocumentationComponent } from './pipe-documentation.component';

const routes: Routes = [{ path: '', component: PipeDocumentationComponent }];

@NgModule({
  declarations: [PipeDocumentationComponent, CardpipeComponent,TruncatePipe],
  imports: [RouterModule.forChild(routes)],
})
export class PipeRoutingModule { }
