import { LinkField } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import clsx from "clsx";
import Link from "next/link";

type Props = {
  buttonLink: LinkField | string;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  const commonClasses = clsx(
    "rounded-xl bg-zinc-100 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide \
     text-black transition-colors duration-150 hover:bg-zinc-200 md:text-2xl",
    className,
  );

  if (typeof buttonLink === "string") {
    return (
      <Link href={buttonLink} className={commonClasses}>
        {buttonText}
      </Link>
    );
  }

  return (
    <PrismicNextLink
      className={commonClasses}
      field={buttonLink}
    >
      {buttonText}
    </PrismicNextLink>
  );
}
