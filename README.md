# gsm-country
A simple nodejs module to get ISO country code from MCC

```
npm install gsm-country
```

#Usage
```
var checker = require('gsm-country');
var isoIN = checker('404'); //Should return IN
var isoSG = checker('525'); //Should return SG
```

#WHY?
Can be used in conjunction with libphonenumber to get a number in PNF.INTERNATIONAL
