
// snippets para crear el metadata estructura ==> mr

import type { Metadata } from "next";

// este metadata se puede utilizar al inicio o al final.
export const metadata: Metadata = {
  title: 'About Title',
  description: 'About description',
  keywords: ['About keywords', "about", 'information', "..."],

};

// Ademas le agregamos el type a la metadata.

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl"> About Page</span>
    </>
  )
}