import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// Angular Material
import { MatMenuModule } from "@angular/material/menu";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatTabsModule } from "@angular/material/tabs";
import { MatBadgeModule } from "@angular/material/badge";

// Angular Material Extension
import { MatPasswordStrengthModule } from "@angular-material-extensions/password-strength";

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatPasswordStrengthModule,
    MatCheckboxModule,
    MatTabsModule,
    MatBadgeModule,
  ],
  exports: [
    MatMenuModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatDialogModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressBarModule,
    MatPasswordStrengthModule,
    MatCheckboxModule,
    MatTabsModule,
    MatBadgeModule,
  ],
})
export class AngularMaterialModule {}
