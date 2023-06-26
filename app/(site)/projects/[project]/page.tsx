import ProjectComponent from "../../components/ProjectComponent";

type Props = {
    params: { project: string }
  }

export default function Project( { params }: Props) {;  
  
    return (  
        <ProjectComponent params={params}/>
     )
};
