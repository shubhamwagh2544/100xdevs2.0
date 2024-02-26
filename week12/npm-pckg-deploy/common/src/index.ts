import zod from 'zod';

export const SigninInputSchema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})

export type SigninType = zod.infer<typeof SigninInputSchema>



// types common to both server and client
// package is published to npm and installed in both server and client

// npm login:                   to login to npm
// npm publish --access public: to publish the package to npm
// npm pack:                    to create a tarball of the package without publishing

// package name should be unique [recommended: username/package-name@version]
// while publishing, version should be unique [increment version in package.json before publishing again]
// package.json should have main field pointing to the entry file

// while publishing, generally typescript files are not published to npm
// add files to be ignored into .npmignore file

// what are declaration files? : .d.ts files
// they are used to provide types for javascript files so that typescript can understand them
// put "declaration": true in tsconfig.json to generate declaration files

// function implementations are not exported in declaration files by default
// only function signatures are exported
// types and interfaces are exported as is by default
// only signatures are exported for classes by default

// anything in ts file, only signature of it is exported in declaration file