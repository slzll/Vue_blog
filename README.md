# blog

[![Build Status](https://travis-ci.org/slzll/vue-blog.svg?branch=master)](https://travis-ci.org/slzll/vue-blog)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### 修改记录
1、修改package.json,修改原build命令为“node --max_old_space_size=1024 ./node_modules/@vue/cli-service/bin/vue-cli-service.js build”，避免内存溢出
