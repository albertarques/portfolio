import Image from "next/image"
import TagButton from "../tags/TagButton"
import Column from "../columns/Column"
import Columns from "../grid/Columns"

export default function WorkCard({className, title, picture, description, link, tags}) {
  return (
    <div className={[`m-3 p-3 border ${className}`]}>
        <h3 className="text-2xl">{title}</h3>
        <p className="text-lg">{description}</p>
        <Image className="rounded-xl py-2" src={picture} alt={title} width={800} height={500} />
      <p className="pt-2">
          {tags?.map((tag, index) => (
              <TagButton key={index} tag={tag} />
          ))}
        </p>
    </div>
  )
}