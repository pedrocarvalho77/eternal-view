import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {slug: string}
}

export default async function Page( {params}: Props) {
    const page = await getPage(params.slug);

    return (
        <div>
            <h1 className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600
            bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">
                {page.title}
            </h1>
            { page.image && <Image
                src={page.image}
                alt={page.title}
                width={1920}
                height={1080}
                className="mt-10 border-2 borger-gray-700 object-cover rounded-xl"
            /> }
            <div className="text-lg text-gray-700 mt-10">
                <PortableText value={page.content}/>
            </div>
        </div>
    )
}