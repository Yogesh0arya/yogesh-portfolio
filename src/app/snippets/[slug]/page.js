"use client";

import { useParams } from "next/navigation";
import Otp from "../_components/Otp.js";
import TabForm from "../_components/TabForm.js";
import ProgressBar from "../_components/ProgressBar.js";
import AutoCompleteSearchBar from "../_components/AutoCompleteSearchBar.js";

export default function Snippet() {
  const params = useParams();
  const { slug } = params;

  const snippetComponents = {
    Otp: Otp,
    TabForm: TabForm,
    ProgressBar: ProgressBar,
    AutoCompleteSearchBar: AutoCompleteSearchBar,
  };
  const CurrentSnippetComponent = snippetComponents[slug];

  return (
    <div>
      {CurrentSnippetComponent ? (
        <CurrentSnippetComponent />
      ) : (
        <p>Snippet not found.</p>
      )}
    </div>
  );
}
