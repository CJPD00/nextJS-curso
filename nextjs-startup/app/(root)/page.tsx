import StartupCard from "@/components/StartupCard";
import SearhForm from "../../components/SearhForm";
//import robot from "@/public/robot.png";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "carlos" },
      _id: 1,
      description: "This is a description",
      image: "/png/robot.png",
      category: "robots",
      title: "we Robots",
    },
  ];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup <br />
          Connect with Investors
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed
        </p>
        <SearhForm query={query}></SearhForm>
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? 'Results for "' + query + '"' : "All Startups"}
        </p>
        <ul className="card_grid mt-7">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post._id} post={post}></StartupCard>
            ))
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
    </>
  );
}
