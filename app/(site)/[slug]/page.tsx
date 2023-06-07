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
            <h1 className="bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700
            bg-clip-text text-transparent text-4xl drop-shadow font-extrabold">
                {page.title}
            </h1>
            <div className="flex gap-10">
                { page.image && <Image
                    src={page.image}
                    alt={page.title}
                    width={350}
                    height={350}
                    className="mt-10 border-2 borger-gray-700 object-cover rounded-xl"
                    priority={true}
                 /> 
                }
                <div className="text-lg text-gray-700 mt-10">
                    <PortableText value={page.content}/>
                </div>
            </div>
        </div>
    )
}