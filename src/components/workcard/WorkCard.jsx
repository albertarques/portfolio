import Image from "next/image";
import TagButton from "../tags/TagButton";
import { useState } from "react";

export default function WorkCard({
  className,
  title,
  picture,
  description,
  link,
  tags,
}) {
  const [hoverState, setHoverState] = useState(false);

  if (hoverState) {
    return (
      <div
        className={[`border-f m-3 p-3 pb-3 border z-10 cursor-pointer ${className}`]}
        onMouseLeave={() => setHoverState(false)}
      >
        <h3 className="text-2xl">{title}</h3>
        <p className="text-lg">{description}</p>
        <Image
          className="border-f rounded-xl my-2 crt-profile hue-rotate-90"
          src={picture}
          alt={title}
          width={800}
          height={500}
        />
        <p className="pt-2 flex flex-wrap text-xs">
          {tags?.map((tag, index) => (
            <TagButton
              key={index}
              tag={tag}
              className={`border-f-hover`}
            />
          ))}
        </p>
      </div>
    );
  } else {
    return (
      <div
        className={[
          `border-f-hover m-3 p-3 pb-3 z-10 border cursor-pointer ${className}`,
        ]}
        onMouseEnter={() => setHoverState(true)}
      >
        <span className="w-full h-full bg-current relative opacity-50"
        />
        <h3 className="text-2xl">{title}</h3>
        <p className="text-lg">{description}</p>
        <Image
            className="border-f-hover rounded-xl my-2 crt-profile crt-img-profile"
            src={picture}
            alt={title}
            width={800}
            height={500}
          />
        <p className="pt-2 flex flex-wrap text-xs">
          {tags?.map((tag, index) => (
            <TagButton key={index} tag={tag} className={`border-f-hover`} />
          ))}
        </p>
      </div>
    );
  }
}
