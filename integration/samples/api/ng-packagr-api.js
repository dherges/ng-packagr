const ngPackage = require('../../../dist/src/public_api');
const path = require('path');

ngPackage
  .ngPackagrNative()
  .forProject(path.join(__dirname, 'ng-package-config.js'))
  .withTsConfig(path.join(__dirname, 'tsconfig.ngc.json'))
  .build()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
