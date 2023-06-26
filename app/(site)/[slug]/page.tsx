import PageComponent from "../components/PageComponent";

type Props = {
  params: { slug: string };
};

export default function Page({ params } : Props) {

  return <PageComponent params={params} />;
}
