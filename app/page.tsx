import { ArrowUpRightIcon, ClapperboardIcon, MailIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { ViewTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from "@/components/ui/item";
import { Separator } from "@/components/ui/separator";
import { sortedDemos } from "@/content/demos";
import { experience, site } from "@/content/site";
import { works } from "@/content/work";

export const metadata: Metadata = {
  title: `${site.name} · Full-Stack Developer`,
};

const order = (i: number) => ({ "--i": i }) as React.CSSProperties;

export default function Home() {
  return (
    <main className="flex flex-col gap-12">
      <header className="reveal flex flex-col gap-4" style={order(0)}>
        <div>
          <h1 className="font-medium">{site.name}</h1>
          <p className="text-muted-foreground">@{site.handle}</p>
        </div>
        <p className="text-muted-foreground">{site.intro}</p>
        {/* Shown once content/demos.ts has at least one clip. */}
        {sortedDemos.length > 0 ? (
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            className="self-start"
            render={<Link href="/demos" />}
          >
            Demos
            <ClapperboardIcon data-icon="inline-end" />
          </Button>
        ) : null}
      </header>

      <Separator className="reveal" style={order(1)} />

      <section id="work" className="reveal flex flex-col gap-3" style={order(1)}>
        <h2 className="text-muted-foreground">Work</h2>
        <ItemGroup className="-mx-3 gap-0">
          {works.map((work) => (
            <Item
              key={work.slug}
              role="listitem"
              size="sm"
              render={<Link href={`/work/${work.slug}`} />}
            >
              <ItemContent className="min-w-0">
                <ViewTransition name={`work-title-${work.slug}`}>
                  <ItemTitle>{work.title}</ItemTitle>
                </ViewTransition>
                <ItemDescription className="line-clamp-none">
                  {work.description}
                </ItemDescription>
              </ItemContent>
              <ItemActions className="self-start text-muted-foreground tabular-nums">
                {work.year}
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </section>

      <Separator className="reveal" style={order(2)} />

      <section className="reveal flex flex-col gap-3" style={order(2)}>
        <h2 className="text-muted-foreground">Experience</h2>
        <ItemGroup className="-mx-3 gap-0">
          {experience.map((item) => (
            <Item key={item.title} role="listitem" size="sm">
              <ItemContent className="min-w-0">
                <ItemTitle>{item.title}</ItemTitle>
                <ItemDescription className="line-clamp-none">
                  {item.summary}
                </ItemDescription>
              </ItemContent>
              <ItemActions className="self-start text-muted-foreground tabular-nums">
                {item.period}
              </ItemActions>
            </Item>
          ))}
        </ItemGroup>
      </section>

      <Separator className="reveal" style={order(3)} />

      <footer className="reveal flex flex-col gap-3" style={order(3)}>
        <h2 className="text-muted-foreground">Contact</h2>
        <div className="flex flex-wrap gap-2">
          {site.links.map((link) => {
            const external = link.href.startsWith("http");
            return (
              <Button
                key={link.label}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={
                  <a
                    href={link.href}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  />
                }
              >
                {link.label}
                {external ? (
                  <ArrowUpRightIcon data-icon="inline-end" />
                ) : (
                  <MailIcon data-icon="inline-end" />
                )}
              </Button>
            );
          })}
        </div>
      </footer>
    </main>
  );
}
