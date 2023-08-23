import Link from "next/link";
import React from "react";

const LinkButton = ({
  url,
  buttonText,
}: {
  url: string;
  buttonText: string;
}) => {
  return (
    <Link legacyBehavior href={url} passHref>
      <a
        className="border-4 px-4 py-2 border-slate-200"
        target="_blank"
        rel="noreferrer noopener"
      >
        {buttonText}
      </a>
    </Link>
  );
};

export default LinkButton;
