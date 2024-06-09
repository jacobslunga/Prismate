import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeInput from "@/components/HomeInput";
import Image from "next/image";
import useNextBlurhash from "use-next-blurhash";

export default async function Home() {
  const [blurDataUrl] = useNextBlurhash("LEHV6nWB2yk8pyo0adR*.7kCMdnj");

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-evenly w-screen h-screen">
        <section className="min-h-screen w-screen bg-bg flex flex-col items-center justify-start py-20">
          <Image
            src="/3.png"
            alt="Prismate"
            priority
            width={500}
            height={500}
            className="absolute bottom-0"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />

          <div className="flex p-2 flex-col items-center justify-center px-10 z-10">
            <h1 className="text-white font-sup-reg text-6xl">
              AI powered design system
            </h1>
            <p
              className="text-white/60 font-sup-reg text-center text-xl"
              style={{ maxWidth: "60%" }}
            >
              Prismate is an AI powered design system that helps you create the
              best user experience for your users.
            </p>
            <div className="mt-5 flex flex-col items-center justify-center">
              <p className="text-white font-sup-reg text-xl">
                Let{"'"}s turn your idea into design
              </p>
              <HomeInput />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
