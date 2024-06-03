
import workData from "../../../../data/work.page.json";
import WorkDetails from "./client/WorkDetails";

function WorkDetailsPage({ params }) {
  const postId = params.id;

  return (
    <WorkDetails id={postId} />
  )
}

export default WorkDetailsPage;

export async function generateStaticParams() {
  
  return (workData.projectList ?? []).map((post) => ({
    id: `${post.id}`,
  }));
}
