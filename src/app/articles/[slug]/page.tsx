import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import PostHeader from "@/app/_components/post-header";
import CentralWrapper from "@/app/_components/central-wrapper";

export default async function Article({ params }: Params) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  return (
    <CentralWrapper maxWidth="1000px">
      <main>
        {/* <Alert preview={glossaryItem.preview} /> */}

        <article style={{ paddingTop: "32px" }}>
          <PostHeader item={article} />
          <PostBody content={content} />
        </article>
      </main>
    </CentralWrapper>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const glossaryItem = getArticleBySlug(params.slug);

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
  const allGlossaryItems = getAllArticles();

  return allGlossaryItems.map((item) => ({
    slug: item.slug,
  }));
}
