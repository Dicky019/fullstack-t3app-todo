import { type NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";
import { Todos } from "~/components/Todos";
import { CreateTodo } from "~/components/CreateTodo";
import { ButtonAuth } from "~/components/ButtonAuth";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Full stack todo app</title>
        <meta name="description" content="Full stack todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#0f1235] to-[#090920]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          {sessionData && (
            <div className="grid grid-cols-1 gap-4 md:gap-8">
              <div className="flex flex-col gap-4 rounded-xl bg-white/10 p-4 text-white">
                <h3 className="text-xl font-bold">Todos</h3>
                <Todos />
                <CreateTodo />
              </div>
            </div>
          )}
          <ButtonAuth />
        </div>
      </main>
    </>
  );
};

export default Home;
