import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from "./components/header/header.component";
import { PessoaPageComponent } from "./pages/pessoa-page/pessoa-page.component";
import { PessoaAdicionarPageComponent } from "./pages/pessoa-adicionar-page/pessoa-adicionar-page.component";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PessoaPageComponent,
        PessoaAdicionarPageComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }