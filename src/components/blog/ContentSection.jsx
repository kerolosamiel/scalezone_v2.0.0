import AuthorCard from '../sections/BlogContent/AuthorCard';
import Content from '../shared/Content';
import SocialMediaShare from '../shared/SocialMediaShare';
import { Separator } from '../ui/separator';

export default function ContentSection({ content, message, slug }) {
  if (!content) return null;

  const { blogContent, authorCard } = content;
  const shareUrl = `blogs/${slug}`;
  const twitter =
    'Scaling your e-commerce business or launching on Amazon UAE? Check out this step-by-step practical guide:';

  return (
    <section>
      <div className="py-32 px-80 max-w-1680 mx-auto max-xl:px-48 max-lg:px-32 max-md:px-16">
        <div className="max-w-1024 w-full flex flex-col gap-32 mx-auto">
          <Content content={blogContent} />
          <Separator className="h-2" />
          <SocialMediaShare restUrl={shareUrl} whatsappMessage={message} twitterMessage={twitter} />
          <Separator className="h-2" />
          <AuthorCard author={authorCard} />
        </div>
      </div>
    </section>
  );
}
