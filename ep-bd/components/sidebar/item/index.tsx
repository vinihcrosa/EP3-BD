import Link from "next/link";
import Image from "next/image";

interface ItemProps {
  title: string;
  icon: any,
  url: string;
}

export default function Item(props: ItemProps) {
  return(
    <Link href={props.url} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'>
      <Image src={props.icon} alt={""} className='fill-current w-4 h-4 mr-2'/>
      <span>{props.title}</span>
    </Link>
  )
}