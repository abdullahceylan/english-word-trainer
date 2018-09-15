import Link from 'next/link';
import Head from 'next/head';
import { globalStyles } from '../components/styles';

export default ({ children, title = 'English Word Trainer' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href="https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i&amp;subset=latin-ext" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
    </Head>

    { children }
  </div>
)
