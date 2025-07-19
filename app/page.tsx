import Image from "next/image";
import Main from "@/app/components/main";
import Content from "@/app/components/db/content";

export default function Home({ content = Content }) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] min-h-screen p-8 m-8 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg rounded-lg">
      <main className="flex flex-col gap-[8px] row-start-2 sm:items-start relative p-8 m-8 bg-gradient-to-br from-blue-300 to-purple-700 shadow-lg rounded-lg">
        <Main content={content} />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
