import React, { useState, useEffect, Suspense } from "react";
import { getAllGlossaryItems } from "@/lib/api";
import Glossary from "../_components/glossary/glossary";

const GlossaryPage: React.FC = () => {
  const terms = getAllGlossaryItems();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Glossary glossaryItems={terms} />
    </Suspense>
  );
};

export default GlossaryPage;
