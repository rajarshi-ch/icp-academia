import React, { useState, useEffect, Suspense } from "react";
import { getAllGlossaryItems } from "@/lib/api";
import Glossary from "../_components/glossary/glossary";
import { Providers } from "../providers";

const GlossaryPage: React.FC = () => {
  const terms = getAllGlossaryItems();

  return (
    <Providers>
      <Suspense fallback={<div>Loading...</div>}>
        <Glossary glossaryItems={terms} />
      </Suspense>
    </Providers>
  );
};

export default GlossaryPage;
