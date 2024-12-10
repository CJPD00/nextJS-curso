import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

const SearhForm = ({ query }: { query?: string }) => {
  // const query = "test";

  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        //type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search startup"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset></SearchFormReset>}
        <button type="submit" className="search-btn text-white">
          <Search className="size-5"></Search>
        </button>
      </div>
    </Form>
  );
};

export default SearhForm;
