"use client"

import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { MindMap } from "@/components/MindMap/MindMap";
import { Outreach } from "@/components/Outreach";
import { Section } from "@/components/Section";
import { Timeline } from "@/components/Timeline/Timeline";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient()  
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen w-full overflow-y-scroll snap-mandatory snap-y'>
        <Section color='bg-indigo-900'>
          <Header />
        </Section>
        <Section>
          <Timeline />
        </Section>
        <Section color="bg-indigo-50">
          <MindMap />
        </Section>
        <Section>
          <Outreach />
        </Section>
        <Section color='bg-indigo-50'>
          <Contact />
        </Section>
      </div>
    </QueryClientProvider>
  );
}
