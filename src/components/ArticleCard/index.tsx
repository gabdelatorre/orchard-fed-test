import Image from "next/image";
import styles from "./styles.module.css";
import { ArticleCardType } from "@/types";
import { MouseEvent } from "react";

export const ArticleCard = ({ article }: { article: ArticleCardType }) => {
  const handleArticleClick = (evt: MouseEvent<HTMLAnchorElement>) => {
    console.log({ evt });
  };

  return (
    <article className="xs:mb-16 lg:mb-0">
      <div className="border-b-4 border-solid border-orchard-red h-[250px] mb-6">
        <Image
          src={article.imageUrl}
          alt={article.title}
          width={400}
          height={400}
          className="h-full w-full object-cover"
        />
      </div>
      <h4 className="mb-2">{article.title}</h4>
      <p className="font-light leading-7 text-sm text-orchard-grey-300 mb-6">
        {article.description}
      </p>
      <div className="">
        <a
          href="#"
          onClick={handleArticleClick}
          className="inline-block uppercase h-[32px] border-b border-solid border-orchard-red"
        >
          {" "}
          read more{" "}
        </a>
      </div>
    </article>
  );
};
