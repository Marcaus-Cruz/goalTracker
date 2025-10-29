import type { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
  image: {
    src: string;
    alt: string;
  };
};

export default function Header({ children, image }: HeaderProps) {
  const { src: headerImage, alt: altText } = image;

  return (
    <header>
      <img src={headerImage} alt={altText} />
      {children}
    </header>
  );
}
