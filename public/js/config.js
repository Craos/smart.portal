/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

let config = {
  apiKey: "AIzaSyB943PJ2Ut23_L7GH9aqeEFpjeIV2GB9Mk",
  authDomain: "verticals-140da.firebaseapp.com",
  databaseURL: "https://verticals-140da.firebaseio.com",
  projectId: "verticals-140da",
  storageBucket: "verticals-140da.appspot.com",
  messagingSenderId: "152190289520",
  appId: "1:152190289520:web:0e01f4f5d601c80a"
};
firebase.initializeApp(config);

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
let CLIENT_ID = null;
