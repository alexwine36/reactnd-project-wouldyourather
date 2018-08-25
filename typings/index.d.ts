
  
  interface ThemeInterface {
    breakpoints?: string[];
    textColors?: {
      black: string[];
      white: string[];
      primary: string[];
      secondary: string[];
      danger: string[];
    };
    palette?: {
      primary: string[];
      secondary: string[];
      success?: string[];
    };
    color?: {
      primary: string;
      secondary: string;
    };
    fonts?: {
      body: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      body2: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      button: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      caption: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      h1: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      h2: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      h3: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      h4: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      h5: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      h6: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      subtitle: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      subtitle2: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
      overline: {
        fontFamily?: string;
        fontSize?: number;
        fontWeight?: number;
        letterSpacing?: number;
      };
    };
    radius?: string;
  }
  