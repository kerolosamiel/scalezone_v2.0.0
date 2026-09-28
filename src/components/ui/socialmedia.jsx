export default function SocialMedia({ href, icon }) {
  return (
    <a href={href} className="border border-accent p-10" target="_blank">
      {icon}
    </a>
  );
}
