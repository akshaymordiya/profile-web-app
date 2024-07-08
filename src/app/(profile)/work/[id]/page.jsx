import workData from "../../../../data/work.page.json";
import WorkDetails from "./WorkDetails";

export const metadata = {
  title: {
    absolute: "Work",
  },
};

function WorkDetailsPage({ params }) {
  const workId = params.id;
  const {
    work : {
      left = [],
      right = []
    }
  } = workData

  const work = ([...left, ...right] ?? []).find(w => parseInt(w.id) === parseInt(workId));

  return (
    <WorkDetails data={work} />
  )
}

export default WorkDetailsPage;

export async function generateStaticParams() {
  const {
    work : {
      left = [],
      right = []
    }
  } = workData
  return ([...left, ...right] ?? []).map((work) => ({
    id: `${work.id}`,
  }));
}
