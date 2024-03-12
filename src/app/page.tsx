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
            I am a frontend developer with five years of hands-on experience spanning digital marketing, fintech, and the restaurant industry. My expertise lies in React, GraphQL, Apollo, Typescript, Tailwind, and Node.js, forming the backbone of my tech stack. Moreover, I bring proficiency in Angular, Redux, Sass, Java, and REST to the table.
            <br />
            In addition to my technical prowess, I have thrived in agile environments, where I have seamlessly transitioned between roles beyond traditional development responsibilities. I have a solid foundation in Behavior-Driven Development (BDD) and have honed my skills in crafting automated test code to ensure robust solutions.
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
