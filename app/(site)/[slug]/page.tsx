import { getPage } from "@/sanity/sanity-utils";
import ChakraPage from "../components/ChakraPage";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const page = await getPage(params.slug);

  return <ChakraPage params={ page } />;
}
