import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { HeaderComponent } from "./components/header/header.component";
import { PessoaPageComponent } from "./pages/pessoa-page/pessoa-page.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PessoaPageComponent
    ],
    imports:[
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }