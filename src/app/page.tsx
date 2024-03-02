"use client"

import { Header } from "@/components/Header";
import { Stats } from "@/components/Stats";
import { Text } from "@/components/Text";
import { Timeline } from "@/components/Timeline";
import { useFetch } from "@/hooks/useFetch";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Home() {
  const queryClient = new QueryClient()  
  
  return (
    <QueryClientProvider client={queryClient}>
    <Header>Conor Smyth</Header>
    <Text>
      I am a frontend developer with 5 years experience across digital marketing, fintech, and the restaurant industry. 
      My main tech stack is React, GraphQL, Apollo, Typescript, Tailwind, and Node JS. 
      I also have experience with Angular, Redux, Sass, Java, REST.

      I have worked across multiple agile environments and have worn the hat of multiple different roles in an agile team other than just developer. 
      I have eperience with BDD development and writing my own automated test code.
    </Text>
    <Timeline />
    <Stats />
  </QueryClientProvider>);
}
