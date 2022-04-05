type PageTitleProps = {
  title: string;
  className?: string;
};

export function PageTitle({ title, className }: PageTitleProps) {
  return <h2 className={`${className} mb-2 text-xl font-semibold`}>{title}</h2>;
}

PageTitle.defaultProps = {
  className: '',
};
