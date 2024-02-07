import Link from "next/link";

export default function Notes({ notes }) {
  return (
    <div>
      {notes?.data?.map((item, index) => (
        <Link href={`/notes/${item?.id}`} key={index}>
          <ul style={{ border: "1px solid black", marginBottom: "10px" }}>
            <p>no: {index + 1}</p>
            <p>title: {item?.title}</p>
            <p>create at: {item?.created_at}</p>
          </ul>
        </Link>
      ))}
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
//   const notes = await res.json();
//   return { props: { notes }, revalidate: 10 };
// }

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/notes");
  const notes = await res.json();
  return { props: { notes } };
}
