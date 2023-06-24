import React from 'react';
import { Header } from '@/components/Header';
import { About } from '@/components/About';
import { Purpose } from '@/components/Purpose';
import { Footer } from '@/components/Footer';
import { Languages } from '@/components/Languages';
import { Line } from '@/components/Line';
import { Objective } from '@/components/Objective';
import { Dashboard } from '@/components/Dashboard';
import { Button } from '@/components/Button';
import { Idea } from '@/components/Idea';

export default function Home() {
  return (
    <main>
      <Button />
      <Header />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-between space-y-10">
          <Idea />
          <Line />
          <About />
          <Line />
        </div>
        <div className="space-y-10 px-10 py-10">
          <Purpose />
          <Line />
          <Objective />
          <Line />
          <Dashboard />
          <Line />
          <Languages />
        </div>
      </div>
      <Footer />
    </main>
  );
}
