import { practiceAreaData } from "../../../component/page-components/practice-area/utils";

export default function Page({ params }) {
  const findPracticeArea = practiceAreaData.find(
    (item) => item.slug === params.slug
  );
  if (!findPracticeArea) return <div>Not Found</div>;
  return (
    <section className="container mt-10 mb-40 text-md">
      <ul className="space-y-20 ">
        {findPracticeArea.subtopics.map((subtopic, index) => (
          <li key={subtopic.name} className="bg-white rounded-xl p-5 ">
            <h6 className="col-span-12 bg-red-600  p-4 rounded-xl text-white w-fit text-[26px] font-bold relative bottom-14">
              {subtopic.name}
            </h6>
            <p className="relative -top-4">{subtopic.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export async function generateStaticParams() {
  return practiceAreaData.map((item) => ({
    slug: item.slug,
  }));
}
