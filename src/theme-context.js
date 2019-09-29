import React, { Component } from 'react';

export const themes = {
    light: {
      foreground: '#000000',
      background: '#eeeeee',
    },
    dark: {
      foreground: '#ffffff',
      background: '#222222',
    },
    toggle: {
        menu: false,
    },
    visible: {
      modal: true,
    },
    notVisible: {
      modal: false,
    }
  };
  export const ThemeContext = React.createContext(
    themes.notVisible
  );