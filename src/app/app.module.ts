import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './shared/services/api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatCardModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatPaginatorModule, MatProgressBarModule,
	MatProgressSpinnerModule,
	MatSortModule,
	MatTableModule, MatToolbarModule,
	MatSelectModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FilledFormsComponent } from './content/filled-forms/filled-forms.component';
import { FilledFormCardComponent } from './content/filled-forms/filled-form-card/filled-form-card.component';
import { ContentComponent } from './content/content.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { ReadonlyTemplateComponent } from './shared/components/builders/readonly-builder/readonly-template/readonly-template.component';
import { ReadonlyBuilderComponent } from './shared/components/builders/readonly-builder/readonly-builder.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContentComponent,
		FilledFormsComponent,
		FilledFormCardComponent,
		MainMenuComponent,
		ReadonlyTemplateComponent,
		ReadonlyBuilderComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes),
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		ReactiveFormsModule,
		HttpClientModule,
		BrowserAnimationsModule,
		MatInputModule,
		MatTableModule,
		MatPaginatorModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatToolbarModule,
		MatSelectModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'ru' },
		ApiService
	],
	entryComponents: [
		ReadonlyTemplateComponent
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
