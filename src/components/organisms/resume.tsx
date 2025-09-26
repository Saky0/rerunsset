import { Section, SectionHeading } from "@/components/atoms/section";
import { siteConfig } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/atoms/fade-in";
import { BriefcaseBusiness, GraduationCap, CalendarDays, Building2 } from "lucide-react";
import { useMemo, type ReactNode } from "react";

export function Resume() {
  const { education, experience } = siteConfig.resume;
  // group experiences by organization for a LinkedIn-like trail
  const groupedExp = useMemo(() => {
    type Item = (typeof experience) extends readonly (infer T)[] ? T : never;
    const map = new Map<string, { org: string; roles: Item[] }>();
    experience.forEach((e) => {
      const key = e.org;
      const bucket = map.get(key);
      if (!bucket) {
        map.set(key, { org: e.org, roles: [e as Item] });
      } else {
        bucket.roles.push(e as Item);
      }
    });
    return Array.from(map.values());
  }, [experience]);

  // helpers to order roles and insert an HR between 2023 and 2024 blocks
  const monthIdx: Record<string, number> = { jan:1, fev:2, mar:3, abr:4, mai:5, jun:6, jul:7, ago:8, set:9, out:10, nov:11, dez:12 };
  const parseStart = (range: string) => {
    // e.g. "mar/2024 - out/2024" | "ago/2022 - abr/2023" | "nov/2022 - presente"
    const [start] = range.split("-")[0].trim().split(/\s+/);
    const [m, y] = start.split("/");
    return { y: parseInt(y, 10) || 0, m: monthIdx[m.toLowerCase()] || 0 };
  };
  return (
    <Section>
      <FadeIn id="curriculo" className="space-y-6">
        <SectionHeading>Currículo</SectionHeading>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Educação */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-black text-white grid place-items-center">
                <GraduationCap size={18} />
              </div>
              <div className="text-lg font-semibold">Educação:</div>
            </div>
            <div className="grid gap-6">
              {education.map((e) => (
                <Card key={`${e.title}-${e.year}`} className="shadow-sm py-3">
                  <CardContent className="p-5">
                    <div className="text-xs text-muted-foreground flex items-center gap-1"><CalendarDays size={14} /> {e.year}</div>
                    <div className="font-semibold mt-1.5 leading-snug">{e.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Building2 size={14} /> {e.org}</div>
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{e.desc}</p>
                    <div className="mt-3 h-[3px] w-24 bg-black/70 rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Experiência */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-black text-white grid place-items-center">
                <BriefcaseBusiness size={18} />
              </div>
              <div className="text-lg font-semibold">Experiência:</div>
            </div>
            <div className="grid gap-6">
              {groupedExp.map((g, gi) => (
                <Card key={`${g.org}-${gi}`} className="shadow-sm py-3">
                  <CardContent className="p-5">
                    <div className="font-semibold flex items-center gap-2"><Building2 size={16} /> {g.org}</div>
                    <div className="mt-3 relative pl-6">
                      {/* vertical line */}
                      <div className="absolute left-3 top-0 bottom-0 w-px bg-black/15" aria-hidden />
                      <div className="grid gap-5">
                        {(() => {
                          // 1) order roles: probationary (2022-2023) -> junior (2023) -> hr -> junior (2024)
                          const roles = [...g.roles]
                            // remove HLE Dev para alinhar ao pedido de exibir probationary -> junior(2023) -> (hr) -> junior(2024 atual)
                            .filter(r => r.title.toLowerCase() !== "hle dev")
                            .sort((a,b)=>{
                            const sa = parseStart(a.year); const sb = parseStart(b.year);
                            if (sa.y !== sb.y) return sa.y - sb.y; // ascending by year
                            return sa.m - sb.m; // ascending by month
                          });
                          const out: ReactNode[] = [];
                          roles.forEach((r, i) => {
                            // push role card
                            out.push(
                              <div key={`${r.title}-${r.year}-${i}`} className="pl-4">
                                <div className="text-xs text-muted-foreground flex items-center gap-1"><CalendarDays size={14}/> {r.year}</div>
                                <div className="font-medium mt-1.5 leading-snug">{r.title}</div>
                                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1"><Building2 size={14}/> {g.org}</div>
                                <p className="text-sm text-muted-foreground mt-4 leading-relaxed">{r.desc}</p>
                              </div>
                            );
                            // insert a divider between 2023 and 2024 roles
                            const cur = parseStart(r.year);
                            const next = roles[i+1] ? parseStart(roles[i+1].year) : null;
                            if (next && cur.y === 2023 && next.y === 2024) {
                              out.push(<hr key={`hr-${i}`} className="my-2 ml-4 border-black/10" />);
                            }
                          });
                          return out;
                        })()}
                      </div>
                    </div>
                    <div className="mt-3 h-[3px] w-24 bg-black/70 rounded" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
