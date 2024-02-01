export default function NotesById({ notes }) {
  return (
    <div>
      <ul style={{ border: "1px solid black", marginBottom: "10px" }}>
        <p>title: {notes?.data?.title}</p>
        <p>create at: {notes?.data?.created_at}</p>
      </ul>
    </div>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch("https://paace-f178cafcae7b.nevacloud.io/api/notes");
//   const notes = await res.json();
//   const paths = notes.data.map((item) => ({
//     params: {
//       id: item.id,
//     },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const res = await fetch(
//     `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
//   );
//   const notes = await res.json();
//   return { props: { notes }, revalidate: 10 };
// }

export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `https://paace-f178cafcae7b.nevacloud.io/api/notes/${id}`
  );
  const notes = await res.json();
  return { props: { notes } };
}
