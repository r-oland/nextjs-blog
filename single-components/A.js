// Components==============
import Link from "next/link";
// =========================

export default function A({ to, children, className }) {
  return (
    <Link href={to}>
      <a className={`${className} Link`}>{children}</a>
    </Link>
  );
}
