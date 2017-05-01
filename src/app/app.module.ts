import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DescriptionPage } from '../pages/description/description';
import { AjoutTachePage } from '../pages/ajoutTache/ajoutTache';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoListService } from '../services/todolist.service';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    DescriptionPage,
    AjoutTachePage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    DescriptionPage,
    AjoutTachePage
  ],
  providers: [
    TodoListService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
