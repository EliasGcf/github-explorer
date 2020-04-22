import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      error: string;

      background: string;
      title: string;
      titleSecundary: string;
      text: string;
      textSecundary: string;
      button: string;
      shape: string;
    };
  }
}
