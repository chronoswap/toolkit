# OneThousand UIkit

[![Version](https://img.shields.io/npm/v/@chronoswap/uikit)](https://www.npmjs.com/package/@chronoswap/uikit) [![Size](https://img.shields.io/bundlephobia/min/@chronoswap/uikit)](https://www.npmjs.com/package/@chronoswap/uikit)

One Thousand UIkit is a set of React components and hooks used to build pages on OneThousand's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @chronoswap/uikit`

## Setup

### Theme

Before using Chronoswap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@chronoswap/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@chronoswap/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://chronoswap.github.io/uikit/) (SOON)
