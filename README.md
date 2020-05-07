# minimal-express-typescript

Minimal express app written in typescript that includes npm scripts to lint, compile and copy assets to dist direcotry and the ability to run the app in the vscode debugger.

## Setup

```
npm install
npm start
```

Browse to http://localhost:3000 and http://localhost:3000/users/:user

## Debugging

1. Create vscode debug config .vscode/launch.json

```
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "npm run debug:start",
      "runtimeExecutable": "npm",
      "runtimeArgs": [
        "run-script",
        "debug:start"
      ],
      "port": 9229,
      "outputCapture": "std"
    }
  ]
}
```

2. Set a breakpoint in the top of ./src/app.ts
3. Click run
4. Select "npm run debug:start" from the dropdown
5. Click play

## Credits

I got a lot of information neded for this setup from several different articles:

General express / typescript articles:

https://github.com/TypeStrong/ts-node

https://github.com/Enterprise-JS/vscode-ts-node-debugging

https://developer.okta.com/blog/2018/11/15/node-express-typescript

https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/

https://medium.com/javascript-in-plain-english/typescript-with-node-and-express-js-why-when-and-how-eb6bc73edd5d

https://medium.com/the-andela-way/how-to-set-up-an-express-api-using-webpack-and-typescript-69d18c8c4f52

http://www.cross-platform-blog.com/tools/nodejs/typescript/visual-studio-code-nodejs-with-typescript-and-debugging/

https://medium.com/create-a-server-with-nodemon-express-typescript/create-a-server-with-nodemon-express-typescript-f7c88fb5ee71

With VSCode debug instructions:

https://medium.com/@dupski/debug-typescript-in-vs-code-without-compiling-using-ts-node-9d1f4f9a94a

https://fettblog.eu/typescript-node-visual-studio-code/

https://dev.to/macmacky/how-to-debug-nodejs-typescript-code-in-vscode-4o27