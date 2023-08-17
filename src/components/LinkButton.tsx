import Link from "next/link";
import React from "react";

const LinkButton = ({
  url,
  buttonText,
}: {
  url: string;
  buttonText: string;
}) => {
  console.log(buttonText);
  return (
    <Link legacyBehavior href="https://example.com" passHref>
      <a target="_blank" rel="noreferrer noopener">
        {buttonText}
      </a>
    </Link>
  );
};

export default LinkButton;
