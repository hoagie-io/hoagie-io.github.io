import React from 'react';
import Intro from '../sections/intro';
import Learn from '../sections/learn'
import '../styles/index.scss';
import Layout from '../components/layout';

export default function Home() {
  return <Layout>
    <Intro />
    <Learn/>
  </Layout>
}
