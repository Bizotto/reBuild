import React from 'react';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Purpose } from '@/components/Purpose';
import { Footer } from '@/components/Footer';
import { Languages } from '@/components/Languages';
import { Line } from '@/components/Line';
import { Objective } from '@/components/Objective';
import { Dashboard } from '@/components/Dashboard';

export default function Home() {
  return (
    <main className="flex-row flex-1">
      <Header />
      <About />
      <Line />
      <Purpose />
      <Line />
      <Objective />
      <Line />
      <Dashboard />
      <Line />
      <Languages />
      <Footer />
    </main>
  );
}
