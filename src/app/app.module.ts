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
	MatTableModule, MatToolbarModule
} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FilledFormsComponent } from './content/filled-forms/filled-forms.component';
import { FilledFormCardComponent } from './content/filled-forms/filled-form-card/filled-form-card.component';
import { ContentComponent } from './content/content.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { ReadonlyBuilderDirective } from './shared/directives/readonly-builder.directive';

registerLocaleData(localeRu, 'ru');

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ContentComponent,
		FilledFormsComponent,
		FilledFormCardComponent,
		MainMenuComponent,
		ReadonlyBuilderDirective
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
		MatToolbarModule
	],
	providers: [
		{ provide: LOCALE_ID, useValue: 'ru' },
		ApiService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
