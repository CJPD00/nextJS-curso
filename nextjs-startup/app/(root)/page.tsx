import SearhForm from "../../components/SearhForm";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

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
    </>
  );
}
