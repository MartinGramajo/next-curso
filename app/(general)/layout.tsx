
// snippets para crear un layout => lrc

// esta forma de importar se debe a nuestro archivo barril 
import { Navbar } from "@/components";


export default function GeneralLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (

    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo</span>
        {children}
      </main>
    </>
  );

}