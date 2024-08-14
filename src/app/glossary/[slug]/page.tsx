import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGlossaryItems, getGlossaryItemBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import PostHeader from "@/app/_components/post-header";
import { Providers } from "@/app/providers";

export default async function GlossaryItem({ params }: Params) {
  const glossaryItem = getGlossaryItemBySlug(params.slug);

  if (!glossaryItem) {
    return notFound();
  }

  const content = await markdownToHtml(glossaryItem.content || "");

  return (
    <Providers>
      <main>
        {/* <Alert preview={glossaryItem.preview} /> */}

          <article className="mb-32">
            <PostHeader item={glossaryItem} />
            <PostBody content={content} />
          </article>
      </main>
    </Providers>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const glossaryItem = getGlossaryItemBySlug(params.slug);

  if (!glossaryItem) {
    return notFound();
  }

  const title = `${glossaryItem.title} | icpAcademia`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const allGlossaryItems = getAllGlossaryItems();

  return allGlossaryItems.map((item) => ({
    slug: item.slug,
  }));
}
