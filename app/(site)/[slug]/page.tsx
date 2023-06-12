import ChakraPage from "../components/ChakraPage";

type Props = {
  params: { slug: string };
};

export default function Page({ params } : Props) {

  return <ChakraPage params={params} />;
}
