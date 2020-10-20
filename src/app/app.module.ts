import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModules } from './Material.module';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoedasComponent } from './moedas/moedas.component';
import { CedulasComponent } from './cedulas/cedulas.component';

@NgModule({
  declarations: [
    AppComponent,
    MoedasComponent,
    CedulasComponent
  ],
  imports: [
    BrowserModule,
    MaterialModules,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
