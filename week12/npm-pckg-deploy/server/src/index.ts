// backend-code 

// importing data from common module
// import {SigninInput} from '@shubhamwagh2544/common'  
// Error: Could not find a declaration file for module '@shubhamwagh2544/common'.
// Since the 'common' package is not published with typescript files, typescript is not able to understand the module

// Solution: declaration file [.d.ts file]
// now do npm install new version of common package with .d.ts file

import { SigninInputSchema, SigninType } from '@shubhamwagh2544/common'   // works fine now