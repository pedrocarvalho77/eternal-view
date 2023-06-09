import ChakraProject from "../../components/ChakraProject";

type Props = {
    
    params: {project: string}

};

export default async function Project( { params }: Props) {;  

    return (  
        <ChakraProject params={ params }/>
     )
};
