import Image from "next/image";
import Link from "next/link";
import { Article } from "@/constants/articles";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link href={`/article/${article.slug}`}>
      <article className="group flex flex-col rounded-sm border border-neutral-800 bg-[#111111] overflow-hidden hover:border-neutral-600 transition-colors duration-300 cursor-pointer h-full">
        {/* Title Row with Arrow */}
        <div className="px-5 pt-5 pb-3 flex items-start justify-between gap-3">
          <h3 className="font-dm-sans text-sm md:text-base text-neutral-100 leading-snug flex-1">
            {article.title}
          </h3>
          {/* Arrow Icon */}
          <svg
            className="h-4 w-4 text-neutral-400 group-hover:text-neutral-100 transition-colors flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7V17"
            />
          </svg>
        </div>

        {/* Meta Information */}
        <div className="px-5 pb-3 text-xs md:text-[13px] text-neutral-400 flex flex-wrap gap-x-3 gap-y-1">
          <span>{article.date}</span>
          <span className="text-neutral-600">•</span>
          <span>{article.readTime}</span>
        </div>

        {/* Article Image */}
        <div className="relative w-full h-56 lg:h-[400px] md:h-[380px] bg-black overflow-hidden">
          <Image
            src={article.heroImage}
            alt={article.title}
            fill
            className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={90}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;