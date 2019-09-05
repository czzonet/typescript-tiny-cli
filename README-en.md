Typescript scaffold
=

[中文文档](README.md) | English

Here a start to use Typescript in node,and in VS Code.All for auto code support.

Prepare
--
Before we start,install normal environment.Especially check these:

- node
- yarn
- git
- ...

And install typescript globally to use tsc to compline ts files:

```sh
yarn global add typescript
```

Steps
--

Here start from the very beginning.Open your terminal:

```sh
# new project  folder
mkdir tstest
cd tstest
# init something
git init
tsc --init
yarn init
# more file
touch README.md
touch .gitignore
mkdir src
touch src/main.ts
```

Configration
--

Parse `.gitignore`,`tsconfig.json` like file in my repository,it fits in common use.Also read the config api to have your specifications.

Run
--

Normal use `./node_modules/.bin/tsc && node dist/index.js` to compline and run.

Use VS Code to debug,you need config a pretask call in launch.json:

```json
{
  "preLaunchTask": "tsc: build - tsconfig.json"
}
```

Task need to use powershell in windows,so especially add config in task.json

```json
{
  "options": {
    "shell": {
      "executable": "powershell.exe"
    }
  },
}
```
Now just click the green button to use and have fun.

References:
--

1. [Node.js + TypeScript 写后端工具 - 掘金](https://juejin.im/post/5a8fff275188257a5a4cc7d9)