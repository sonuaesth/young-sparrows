import {BreakpointsOptions, createTheme, responsiveFontSizes} from '@mui/material/styles';
import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    timer: CSSProperties;
    timerTags: CSSProperties;
    earlyBirdTitle: CSSProperties;
    discountValue: CSSProperties;
    discountDescription: CSSProperties;
  }

  interface TypographyVariantsOptions {
    timer?: CSSProperties;
    timerTags?: CSSProperties;
    earlyBirdTitle?: CSSProperties;
    discountValue?: CSSProperties;
    discountDescription?: CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        timer: true;
        timerTags: true;
        earlyBirdTitle: true;
        discountValue: true
        discountDescription: true
    }
}

const customBreakpoints: BreakpointsOptions = {
    values: {
        xs: 0,
        sm: 900,
        md: 1024,
        lg: 1280,
        xl: 1920,
    },
};

let theme = createTheme({
    breakpoints: customBreakpoints,
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: `
            body {
              &::-webkit-scrollbar {
                display: none;
              }
              scrollbar-width: none; /* For Firefox */
              -ms-overflow-style: none; /* For Internet Explorer and Edge */
            }
          `,
        },
    },
    palette: {
        text: {
            primary: '#000000',
            secondary: '#FFFFFF',
            disabled: '#F89C27'
        },
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#F89C27',
            dark: '#224A85'
        },
        warning: {
            main: '#F89C27',
        },
        info: {
            main: '#FFFFFF',
        }
    },
    typography: {
        fontFamily: 'Open Sans',
        h1: {
            fontSize: 96,
            fontFamily: 'Open Sans Extra Bold',
        },
        h2: {
            fontSize: 64,
            fontFamily: 'Open Sans Bold',
            marginBottom: '1.5rem',
        },
        h3: {
            fontWeight: 400,
            fontSize: 36,
        },
        h5: {
            fontSize: 24,
        },
    }
});

theme = responsiveFontSizes(theme, {
    breakpoints: ['xs', 'sm', 'md', 'lg', 'xl'],
    factor: 5,
});

theme.typography.h1 = {
    ...theme.typography.h1,
    [theme.breakpoints.up('xs')]: {
        fontSize: 40,
    },
    [theme.breakpoints.up('sm')]: {
        fontSize: 40,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 48,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 76,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 96,
    },
};
theme.typography.h2 = {
    ...theme.typography.h2,
    [theme.breakpoints.up('sm')]: {
        fontSize: 24,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 28,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 38,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 48,
    },
};
theme.typography.h3 = {
    ...theme.typography.h3,
    [theme.breakpoints.up('sm')]: {
        fontSize: 20,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 24,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 28,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 36,
    },
};
theme.typography.h5 = {
    ...theme.typography.h5,
    [theme.breakpoints.up('md')]: {
        fontSize: 18,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 22,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 24,
    },
};
theme.typography.timer = {
    fontFamily: 'Open Sans Bold',
    fontWeight: 700,
    color: "#224A85",
    [theme.breakpoints.up('xs')]: {
        fontSize: 70,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 64,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 64,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 96,
    },
}
theme.typography.timerTags = {
    ...theme.typography.timer,
    fontWeight: 600,
    [theme.breakpoints.up('xs')]: {
        fontSize: 18.5,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 16,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 16,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 26,
    },
}
theme.typography.earlyBirdTitle = {
    ...theme.typography.timer,
    fontFamily: 'Open Sans',
    [theme.breakpoints.up('xs')]: {
        fontSize: 36,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 40,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 40,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 64,
    },
}

theme.typography.discountValue = {
    ...theme.typography.timer,
    color: theme.palette.warning.main,
    [theme.breakpoints.up('xs')]: {
        fontSize: 164,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 164,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 164,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 250,
    },
}

theme.typography.discountDescription = {
    ...theme.typography.timer,
    fontWeight: 400,
    [theme.breakpoints.up('xs')]: {
        fontSize: 32,
    },
    [theme.breakpoints.up('md')]: {
        fontSize: 32,
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: 34,
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: 50,
    },
}

export default theme;
