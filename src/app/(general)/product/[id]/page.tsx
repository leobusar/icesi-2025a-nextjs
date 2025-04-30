import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props{
    params: {
        id: string
    }
}

export function generateMetadata({params}: Props): Metadata{
    try {
        const {id} = params; 
        return {
            title: `# ${id} - product detail` ,
            description: `Product Detail{id}`
        }
    } catch (error) {
        return {
            title: `Error product` ,
            description: `Product Detail error`
        }
        
    }
}

export default async function ProductDetailPage({params}: Props) {

  const id = parseInt(params.id)

  //const id2 = await fetch("http://10.10.1.1");

  if (id>100)
    notFound();

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <h1> Product detail {params.id}</h1>
    </div>
  );
}

