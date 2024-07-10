import { practiceAreaData } from "../../../component/page-components/practice-area/utils";

export default function Page({ params }) {
  const findPracticeArea = practiceAreaData.find(
    (item) => item.slug === params.slug
  );
  if (!findPracticeArea) return <div>Not Found</div>;
  return (
    <div>
      {/* <h1>{findPracticeArea.topic}</h1> */}
      {findPracticeArea.subtopics.map((subtopic, index) => (
        <div key={index} className=" flex flex-col gap-8 mb-10">
          <h2 className=" text-2xl">{subtopic.name}</h2>
          <div>{subtopic.description}</div>
        </div>
      ))}
    </div>
  );
}

export async function generateStaticParams() {
  return practiceAreaData.map((item) => ({
    slug: item.slug,
  }));
}
