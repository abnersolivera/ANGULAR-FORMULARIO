import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewExampleDialogComponent } from "../dialog-overview-example-dialog/dialog-overview-example-dialog.component";

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrl: './modal-example.component.css'
})
export class ModalExampleComponent {
  animal: string = "";
  name: string | null = null;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
