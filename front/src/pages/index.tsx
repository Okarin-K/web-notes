import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Box, Flex, Heading, Link, Spinner } from '@chakra-ui/react'
import Header from '@/components/header'
import { Suspense, useState } from 'react'
import Page from '@/notes/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Notes</title>
        <meta name="description" content="Notes, memo..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Box p={8}>
          <Link href="/notes/new">
            <svg width='50' aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="4 4 8 8" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" clipRule="evenodd"></path></svg>
          </Link>
          <Box mt={5}>
            <Page />
          </Box>
        </Box>
      </main>
    </>
  )
}
