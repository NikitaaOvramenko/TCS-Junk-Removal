import Link from "next/link";

interface Props {
  className?: string;
}
// mt-2 w-fit self-center bg-[#16C834] text-white font-bold rounded-xl px-6 py-3 shadow-[0_6px_0_#0C8A23] hover:translate-y-[2px] hover:shadow-[0_4px_0_#0C8A23] transition-all
export default function BookButton({ className }: Props) {
  return (
    <Link href={"/book"} className={className}>
      <p>Book Removal</p>
    </Link>
  );
}
