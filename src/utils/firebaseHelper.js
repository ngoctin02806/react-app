import * as firebase from 'firebase/app';
import 'firebase/storage';

import config from '../../config/config';

firebase.initializeApp(config['FIREBASE']);
const storeDB = firebase.storage();

export const storage = storeDB;

export default firebase;
