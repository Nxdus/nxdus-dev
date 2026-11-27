import type { MDXComponents } from "mdx/types";
import { Separator } from "@/components/ui/separator";

// shadcn has no prose component; these follow its Typography guide.
const components: MDXComponents = {
  h2: (props) => <h2 className="mt-10 mb-3 font-medium" {...props} />,
  p: (props) => <p className="my-4 text-muted-foreground" {...props} />,
  ul: (props) => (
    <ul
      className="my-4 ml-5 flex list-disc flex-col gap-2 text-muted-foreground marker:text-muted-foreground/50"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-medium text-foreground" {...props} />,
  a: (props) => (
    <a className="font-medium text-foreground underline underline-offset-4" {...props} />
  ),
  code: (props) => (
    <code className="bg-muted px-1 py-0.5 text-foreground" {...props} />
  ),
  hr: () => <Separator className="my-8" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
