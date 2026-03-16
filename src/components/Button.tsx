import clsx from "clsx";
import Link from "next/link";

type Props = {
  buttonLink: string;
  buttonText: string | null;
  className?: string;
};

export default function Button({ buttonLink, buttonText, className }: Props) {
  const commonClasses = clsx(
    "rounded-xl bg-zinc-100 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide \
     text-black transition-colors duration-150 hover:bg-zinc-200 md:text-2xl",
    className,
  );

  return (
    <Link href={buttonLink} className={commonClasses}>
      {buttonText}
    </Link>
  );
}
