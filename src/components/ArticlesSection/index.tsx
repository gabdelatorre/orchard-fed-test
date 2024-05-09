"use client";
import { ArticleListType } from "@/types";
import { ArticleCard } from "../ArticleCard";
import { useTrail, animated } from "@react-spring/web";

const ARTICLES_LIST: ArticleListType = {
  header: "All the latest from AEG",
  articles: [
    {
      imageUrl: "/component-02/Image-01.jpg",
      title: "Summer Lunch Menu By Mark Best",
      description:
        "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
    },
    {
      imageUrl: "/component-02/Image-02.jpg",
      title: "A Traditional Christmas Eve, Mark Best Style",
      description:
        "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests. ",
    },
    {
      imageUrl: "/component-02/Image-03.jpg",
      title: "Taking Taste Further",
      description:
        "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most out of our products - and the best out of your food.",
    },
  ],
};

export const ArticlesSection = () => {
  const articleList = ARTICLES_LIST;
  const trails = useTrail(3, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <section className="flex flex-col gap-16 xs:p-8 sm:p-24 xl:p-40 justify-center items-center">
      <h1 className="uppercase font-light text-4xl">{articleList.header}</h1>
      <div className="grid xs:grid-cols-1 lg:grid-cols-3 gap-4">
        {articleList.articles.map((article, idx) => {
          return (
            <animated.div key={article.title} style={trails[idx]}>
              <ArticleCard article={article} />
            </animated.div>
          );
        })}
      </div>
    </section>
  );
};
