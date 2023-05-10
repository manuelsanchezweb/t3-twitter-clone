import { type NextPage } from "next";
import { NewTweetForm } from "~/components/NewTweetForm";

const Home: NextPage = () => {
  return (
    <>
      <header className="sticky top-0 z-10 border-b bg-white pt-2">
        <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
        {/* {session.status === "authenticated" && (
    <div className="flex">
      {TABS.map((tab) => {
        return (
          <button
            key={tab}
            className={`flex-grow p-2 hover:bg-gray-200 focus-visible:bg-gray-200 ${
              tab === selectedTab
                ? "border-b-4 border-b-blue-500 font-bold"
                : ""
            }`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  )} */}
      </header>
      <NewTweetForm />
    </>
  );
};

export default Home;
