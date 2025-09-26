import Link from "next/link"
import { SafeImage } from "./safe-image"

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/" className="flex items-center gap-2">
        <SafeImage src="/rerunsset-logo.png" alt="Rerunsset" width={120} quality={100} priority height={80} />
      </Link>
    </div>
  )
}
