import StartupCard from "@/components/StartupCard";
import SearhForm from "../../components/SearhForm";
//import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
//import robot from "@/public/robot.png";
import { StartupTypeCard } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

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
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post}></StartupCard>
            ))
          ) : (
            <p>No posts found</p>
          )}
        </ul>
      </section>
      <SanityLive></SanityLive>
    </>
  );
}
