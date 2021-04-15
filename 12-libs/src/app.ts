import _ from 'lodash';

declare var GLOBAL: any; // declara this variable saying it gonna exist

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);