import { SafeImage } from "@/components/atoms/safe-image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  image: string;
  url: string;
  tags?: readonly string[];
};

export function ProjectCard({ title, image, url, tags = [] }: Props) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-[4/3]">
        <SafeImage src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardContent className="p-4 space-y-3">
        <div className="font-medium">{title}</div>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
        )}
        <Link href={url} target="_blank" rel="noopener noreferrer" className="text-sm underline">
          Visualizar
        </Link>
      </CardContent>
    </Card>
  );
}
