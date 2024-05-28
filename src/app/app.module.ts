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
import { MatNativeDateModule, provideNativeDateAdapter } from "@angular/material/core";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { HttpClientModule } from "@angular/common/http";
import { PaiComponent } from "./components/pai/pai.component";
import { FilhoComponent } from "./components/filho/filho.component";
import { ItemAddComponent } from "./components/item-add/item-add.component";
import { ItemListComponent } from "./components/item-list/item-list.component";
import { DatepickerComponent } from "./components/datepicker/datepicker.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ModalExampleComponent } from "./components/modal/modal-example.component";
import {
    MatDialog,
    MAT_DIALOG_DATA,
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from "./components/dialog-overview-example-dialog/dialog-overview-example-dialog.component";
import { TableComponent } from "./components/table/table.component";
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        PessoaPageComponent,
        PessoaAdicionarPageComponent,
        PaiComponent,
        FilhoComponent,
        ItemListComponent,
        ItemAddComponent,
        DatepickerComponent,
        ModalExampleComponent,
        DialogOverviewExampleDialogComponent,
        TableComponent
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
        MatSelectModule,
        MatNativeDateModule,
        NgxMaskDirective,
        NgxMaskPipe,
        MatNativeDateModule,
        HttpClientModule,  
        MatFormFieldModule,
        MatDatepickerModule,
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatTableModule,
    ],
    providers: [
        provideNgxMask(),
        provideNativeDateAdapter()
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }