import React, { useState, useEffect } from "react";

import { GlossaryItem } from "@/interfaces/glossaryItem";
import { getAllGlossaryItems } from "@/lib/api";
import Glossary from "../_components/glossary";
import { Providers } from "../providers";

const GlossaryPage: React.FC = () => {
  const terms = getAllGlossaryItems();

  return (
    <Providers>
      <Glossary glossaryItems={terms} />
    </Providers>
  );
};

export default GlossaryPage;
