import {MantineProvider, createTheme} from '@mantine/core';
import '@mantine/core/styles.css';
import './globals.css'


const theme = createTheme({
  fontFamily:'Verdana, sans-serif',
  fontFamilyMonospace:'Monaco, Courier, monospace',
  headings:{
    fontFamily:'Outfit, sans-serif',
    fontWeight:'500',
    sizes:{
      h1:{ fontSize: '2.25rem', lineHeight: '1.3' },
      h2: { fontSize: '1.875rem', lineHeight: '1.35' },
      h3: { fontSize: '1.5rem', lineHeight: '1.4' },
    }
  },
  primaryColor:'moneyGreen',
  colors:{
    moneyGreen:[
      '#b3ffb3','#66ff66','#00cc00','#33cc33','#00cc66','#009933',
      '#00b300','#008000','#004d00','#001a00'
    ],
  },
  defaultRadius:'md',
  shadows:{
    md:'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  }
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}
    >
      <body className="min-h-full">
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
        
        </body>
    </html>
  );
}
