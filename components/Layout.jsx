import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Layout = ({ content, title, children }) => {
  return (
    <>
      <Head>
        <title>
          {title ? title + ' - Neapolitan Pizza' : 'Neapolitan Pizza'}
        </title>
        <meta
          name="description"
          content={
            content
              ? content + ' - Ecommerce Pizza Shop Website'
              : 'Ecommerce Pizza Shop Website'
          }
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen justify-between flex-col">
        <header>
          <nav className="flex justify-between h-12 shadow-md items-center px-5">
            <Link href="/">
              <a className="text-lg font-bold">Neapolitan Pizza</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="px-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="px-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>

        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>copyright © - Pizza Neapolitan 2022</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
