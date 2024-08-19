import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllArticles, getArticleBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { PostBody } from "@/app/_components/post-body";
import PostHeader from "@/app/_components/post-header";
import CentralWrapper from "@/app/_components/central-wrapper";
import { AspectRatio, Image } from "@chakra-ui/react";

export default async function Article({ params }: Params) {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return notFound();
  }

  const content = await markdownToHtml(article.content || "");

  return (
    <CentralWrapper maxWidth="1000px">
      <main>
        <AspectRatio ratio={16 / 9} width={"100%"}>
          <Image
            src={article.coverImage}
            alt="Web Technology Image"
            objectFit="cover"
            objectPosition="center"
            width="100%"
            height="100%"
            borderRadius="50px" // Added to make the edges rounded
          />
        </AspectRatio>

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

  const title = `${glossaryItem.title} | ICPCoins Academy`;

  return {
    title,
    openGraph: {
      title,
      description: glossaryItem.excerpt,
      images: [
        {
          url: glossaryItem.ogImage.url,
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const allGlossaryItems = getAllArticles();

  return allGlossaryItems.map((item) => ({
    slug: item.slug,
  }));
}
