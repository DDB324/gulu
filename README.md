# gulu - 一个Vue UI组件

[![Build Status](https://travis-ci.org/DDB324/gulu.svg?branch=master)](https://travis-ci.org/DDB324/gulu)

作者：ddb

## 介绍

这是我在学习 Vue 过程中做的一个UI组件, 希望对你有用

## 开始使用
1. 添加css样式 
    使用本框架前，请在CSS中启用border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    IE8 及以上浏览器都支持此样式.
    
    你还需要设置默认颜色等变量
    ```
    :root {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    ```
    IE15 及以上浏览器都支持此样式.

2. 安装gulu
    ```
    npm i -s gulu
    ```
3. 引入gulu
    ```
   import { Button } from "ddb-gulu-test-1";
   import "ddb-gulu-test-1/dist/index.css";
   
   export default {
     name: "App",
     components: {
       // HelloWorld,
       "g-button": Button,
     },
   };
   ```
4. 引入svg symbols
    ```
   <script src="//at.alicdn.com/t/font_2109690_m1syr3964y9.js"></script>

   ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

