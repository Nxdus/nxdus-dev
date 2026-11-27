import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { getWork, works } from "@/content/work";

const order = (i: number) => ({ "--i": i }) as React.CSSProperties;

export function generateStaticParams() {
  return works.map((work) => ({ slug: work.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const work = getWork((await params).slug);
  return work
    ? { title: work.title, description: work.description }
    : { title: "Case study not found" };
}

export default function WorkPage({ params }: PageProps<"/work/[slug]">) {
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

      <Suspense fallback={<WorkDetailsSkeleton />}>
        <WorkDetails params={params} />
      </Suspense>
    </main>
  );
}

function WorkDetailsSkeleton() {
  return (
    <div role="status" className="flex flex-col gap-8">
      <span className="sr-only">Loading case study</span>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Skeleton className="h-5 w-1/2" />
      </div>
      <Separator />
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

async function WorkDetails({ params }: Pick<PageProps<"/work/[slug]">, "params">) {
  const { slug } = await params;
  const work = getWork(slug);
  if (!work) notFound();

  const { default: Body } = await import(`@/content/work/${slug}.mdx`);

  return (
    <>
      <header className="flex flex-col gap-4">
        <div>
          <ViewTransition name={`work-title-${work.slug}`}>
            <h1 className="w-fit font-medium">{work.title}</h1>
          </ViewTransition>
          <p className="reveal text-muted-foreground" style={order(1)}>
            {work.description} · {work.year}
          </p>
        </div>

        <div className="reveal flex flex-wrap gap-1.5" style={order(2)}>
          {work.stack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        {work.links?.length ? (
          <div className="reveal flex flex-wrap gap-2" style={order(2)}>
            {work.links.map((link) => (
              <Button
                key={link.href}
                variant="outline"
                size="sm"
                nativeButton={false}
                render={<a href={link.href} target="_blank" rel="noreferrer" />}
              >
                {link.label}
                <ArrowUpRightIcon data-icon="inline-end" />
              </Button>
            ))}
          </div>
        ) : null}
      </header>

      <Separator className="reveal" style={order(3)} />

      <article className="reveal text-sm/relaxed" style={order(3)}>
        <Body />
      </article>
    </>
  );
}
