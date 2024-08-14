import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGlossaryItems, getGlossaryItemBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import PostHeader from "@/app/_components/post-header";
import { Providers } from "@/app/providers";
import CentralWrapper from "@/app/_components/central-wrapper";

export default async function GlossaryItem({ params }: Params) {
  const glossaryItem = getGlossaryItemBySlug(params.slug);

  if (!glossaryItem) {
    return notFound();
  }

  const content = await markdownToHtml(glossaryItem.content || "");

  return (
    <Providers>
      <CentralWrapper maxWidth="1000px">
        <main>
          {/* <Alert preview={glossaryItem.preview} /> */}

          <article style={{ paddingTop : '32px'}}>
            <PostHeader item={glossaryItem} />
            <PostBody content={content} />
          </article>
        </main>
      </CentralWrapper>
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
