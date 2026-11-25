import { getPage} from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from 'next/image'
import { notFound } from "next/navigation";

type Props = {
  params: {slug: string}
};

export default async function PageComponent( { params }: Props ) {
    const page = await getPage(params.slug);
    if (!page) notFound();

    return (
      <div>
        <h1 className="text-gradient text-4xl sm:text-5xl drop-shadow font-extrabold">
          {page.title}
        </h1>
        {page.image && (
          <Image
            src={page.image}
            alt={page.title}
            width={350}
            height={350}
            className="mt-6 max-w-full h-auto object-cover rounded-lg border border-gray-500"
          />
        )}
        <div className="text-lg text-gray-700 dark:text-gray-300 mt-10"><PortableText value={page.content ?? []} /></div>
      </div>
    );
}
