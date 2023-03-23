import Head from 'next/head';
import styles from '../styles/Home.module.css';
import dynamic from 'next/dynamic';
import 'quill-editor-math-fix/dist/index.css';

const Editor = dynamic(
  () => import('quill-editor-math-fix').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => <p>Editor loading now ...</p>,
  }
);

export default function Home() {
  const onChange = (value, delta, source, editor) => {
    console.log(value,delta, source, editor);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Text Editor React Quill</h1>
        <br />
        <Editor initialValue="Hello World" onChange={onChange} />
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
