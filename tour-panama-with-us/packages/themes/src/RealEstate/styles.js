import { css } from 'styled-components';

export const space = [0, 4, 8, 16, 32, 64];

export const colors = {
  brand: '#FFD600',
  error: '#EB5757',
  success: '#27AE60',
  shades: {
    brand: ['#F0B400', '#F7C600', '#FFD600', '#FFE14D', '#FFE873'],
  },
  gray: ['#262522', '#5C5B57', '#ADADAB', '#E0E0DF', '#EBEAEA', '#F9F9F9', '#FFFFFF'],
};

export const typography = {
  googleFont:
    'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;1,400&display=swap',
  fontFamily: "'Jost', sans-serif",
  color: colors.gray[1],
  sizes: {
    base: 18,
  },
};

export const body = {
  fontSize: typography.sizes.base,
  fontFamily: typography.fontFamily,
  lineHeight: 1.6,
  color: colors.gray[0],
};

export const transition = {
  base: '.2s ease-in-out',
  all: 'all .2s ease-in-out',
};

export const zIndex = {
  navbar: 1000,
  sticky: 1010,
  menuNav: 1020,
  navbarDropdown: 990,
};

export const borderRadius = {
  small: 2,
  normal: 4,
  large: 8,
  xLarge: 16,
  xxLarge: 32,
  xxxLarge: 64,
};

export const radii = { ...borderRadius };

export const shadows = {};

export const global = css`
  blockquote {
    footer {
      display: flex;
      align-items: center;

      &::before {
        display: block;
        width: 40px;
        height: 1px;
        margin-top: 2px;
        margin-right: 16px;
        content: '';
        background-color: currentColor;
      }
    }
  }

  // LOGO
  .logoWrapper {
    .logo-scroll { 
      display: none;
    }
  }

  .sticky .logoWrapper {
    .logo {
      display: none;
    }
    .logo-scroll { 
      display: block;
    }
  }

  div[name="about-us"] {
    padding-top: 0px;
    p {
      color: #FFD600;
    }
  }

  .subtext {
    font-weight: 900;
    color: #262522;
  }

  #gatsby-focus-wrapper > a {
    z-index: 9999999;
  }

  .form {
    &.submitted {
      display: none;
    }
  }

  .thankYou {
    width: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    padding-top: 4rem;
    p {
      margin-top: 0px;
    }

    &.submitted {
      display: flex;
    }
  }
`;

export const breakpoints = ['450px', '768px', '1170px', '1440px'];
// eslint-disable-next-line prefer-destructuring
breakpoints.sm = breakpoints[0];
// eslint-disable-next-line prefer-destructuring
breakpoints.md = breakpoints[1];
// eslint-disable-next-line prefer-destructuring
breakpoints.lg = breakpoints[2];
// eslint-disable-next-line prefer-destructuring
breakpoints.xl = breakpoints[3];

export const googleMapsStyle = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e9e9e9',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 29,
      },
      {
        weight: 0.2,
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 18,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dedede',
      },
      {
        lightness: 21,
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        lightness: 16,
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        saturation: 36,
      },
      {
        color: '#333333',
      },
      {
        lightness: 40,
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f2f2f2',
      },
      {
        lightness: 19,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 20,
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#fefefe',
      },
      {
        lightness: 17,
      },
      {
        weight: 1.2,
      },
    ],
  },
];
