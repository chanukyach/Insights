"use client";

import Giscus from "@giscus/react";

export function GiscusComments() {
  return (
    <div className="mt-12">
      <Giscus
        repo="chanukyach/insights-comments"
        repoId="R_kgDORbInZg"
        category="General"
        categoryId="DIC_kwDORbInZs4C3Z5i"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="light"
        lang="en"
      />
    </div>
  );
}
