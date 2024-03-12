"use client"

import { Header } from "@/components/Header";
import { MindMap } from "@/components/MindMap/MindMap";
import { Section } from "@/components/Section";
import { Text } from "@/components/Text";
import { Timeline } from "@/components/Timeline/Timeline";
import { useFetch } from "@/hooks/useFetch";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient()  
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className='h-screen w-full overflow-y-scroll snap-mandatory snap-y'>
        <Section color='bg-indigo-600'>
          <Header>Conor Smyth</Header>
        </Section>
        <Section>
          <Text>
            I am a frontend developer with 5 years experience across digital marketing, fintech, and the restaurant industry. 
            My main tech stack is React, GraphQL, Apollo, Typescript, Tailwind, and Node JS. 
            I also have experience with Angular, Redux, Sass, Java, REST.

            I have worked across multiple agile environments and have worn the hat of multiple different roles in an agile team other than just developer. 
            I have eperience with BDD development and writing my own automated test code.
          </Text>
        </Section>
        <Section color="bg-indigo-50">
          <Timeline />
        </Section>
        <Section>
          <MindMap />
        </Section>
      </div>
    </QueryClientProvider>
  );
}
