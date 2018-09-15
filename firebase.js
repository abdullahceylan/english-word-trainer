import firebase from 'firebase';
import { FIREBASE_CONFIG } from './config';

export default !firebase.apps.length ? firebase.initializeApp(FIREBASE_CONFIG) : firebase.app();
