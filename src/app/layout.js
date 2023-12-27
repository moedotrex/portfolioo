"use client";
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page';
import { BrowserRouter } from 'react-router-dom';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}

      </body>
    </html>
  )
}

