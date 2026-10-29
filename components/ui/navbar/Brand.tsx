import Link from "next/link";
import Image from "next/image";

const Brand = () => {
  return (
    <Link className="flex items-center gap-3 mb-9" href = "/">
        <Image src = "/s_logo.png" alt = "Kanban Logo" width = {48} height={48}/>
        <h2 className="text-[20px] font-semibold text-(--primary-500) uppercase">Kanban</h2>
      </Link>
  )
}

export default Brand
