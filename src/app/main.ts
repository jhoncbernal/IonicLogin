import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import * as firebase from 'firebase/app' 
// Initialize Firebase
import {firebaseConfig} from '../environments/firebase-config';
firebase.initializeApp(firebaseConfig);
platformBrowserDynamic().bootstrapModule(AppModule);
