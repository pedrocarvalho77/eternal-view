import ChakraProject from "../../components/ChakraProject";

type Props = {
    params: { project: string }
  }

export default function Project( { params }: Props) {;  
  
    return (  
        <ChakraProject params={params}/>
     )
};
