import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
@Injectable()
export class Authentication{
    constructor(private angularAuth : AngularFireAuth){}

    createUserWithEmailAndPassword(email,password){
        this.angularAuth.auth.createUserWithEmailAndPassword(email,password);
    }

}