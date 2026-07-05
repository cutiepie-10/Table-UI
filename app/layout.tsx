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
  primaryColor:'emerald',
  colors:{
    emerald: [
      '#eefcf4', '#d7f7e4', '#b2edd0', '#83ddb4', '#59c997',
      '#34af7c', '#248f62', '#1d7250', '#185b41', '#144b37'
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
        <MantineProvider theme={theme} defaultColorScheme='dark'>
          {children}
        </MantineProvider>
        
        </body>
    </html>
  );
}
