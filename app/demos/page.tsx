import { ArrowLeftIcon, ArrowUpRightIcon, ClapperboardIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { DemoVideo } from "@/components/demo-video";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { mediaUrl, sortedDemos } from "@/content/demos";

const description = "Short demos of my web and desktop apps.";

export const metadata: Metadata = {
  title: "Demos",
  description,
};

const order = (i: number) => ({ "--i": i }) as React.CSSProperties;

const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

export default function DemosPage() {
  return (
    <main className="flex flex-col gap-8">
      <Button
        variant="ghost"
        size="sm"
        nativeButton={false}
        className="reveal -ml-2.5 self-start"
        style={order(0)}
        render={<Link href="/" />}
      >
        <ArrowLeftIcon data-icon="inline-start" />
        Back to home
      </Button>

      <header className="reveal" style={order(1)}>
        <h1 className="font-medium">Demos</h1>
        <p className="text-muted-foreground">
          {description}
        </p>
      </header>

      {sortedDemos.length === 0 ? (
        <Empty className="reveal border" style={order(2)}>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <ClapperboardIcon />
            </EmptyMedia>
            <EmptyTitle>No demos yet</EmptyTitle>
          </EmptyHeader>
          <EmptyContent>
            <Button variant="outline" size="sm" nativeButton={false} render={<Link href="/#work" />}>
              Browse selected work
            </Button>
          </EmptyContent>
        </Empty>
      ) : (
        // Like antfu.me/demos: the grid is wider than the text column, newest first.
        <div className="grid w-[min(76rem,calc(100vw-3rem))] grid-cols-[repeat(auto-fit,minmax(min(100%,20rem),24rem))] items-start justify-center gap-4 self-center">
          {sortedDemos.map((demo, i) => (
            <Card
              key={demo.slug}
              className="reveal pt-0 transition-transform duration-500 hover:z-10 hover:scale-[1.01]"
              style={order(i + 2)}
            >
              <AspectRatio ratio={demo.ratio ?? 16 / 9} className="border-b">
                <DemoVideo
                  src={mediaUrl(demo.video)}
                  poster={demo.poster ? mediaUrl(demo.poster) : undefined}
                  title={demo.title}
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>{demo.title}</CardTitle>
                <CardDescription>{demo.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap items-center gap-2">
                <time dateTime={demo.date} className="text-muted-foreground tabular-nums">
                  {formatDate(demo.date)}
                </time>
                <Badge variant="outline">{demo.category}</Badge>
                <div className="ml-auto flex gap-1">
                  {demo.links?.map((link) => {
                    const external = link.href.startsWith("http");
                    return (
                      <Button
                        key={link.href}
                        variant="ghost"
                        size="xs"
                        nativeButton={false}
                        render={
                          external ? (
                            <a href={link.href} target="_blank" rel="noreferrer" />
                          ) : (
                            <Link href={link.href} />
                          )
                        }
                      >
                        {link.label}
                        <ArrowUpRightIcon data-icon="inline-end" />
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}
