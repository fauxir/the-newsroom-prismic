import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";
import Link from "next/link";
import { createClient } from "/home/michael/Desktop/Training/Training/the-newsroom-prismic/prismicio.js";
import { components } from "/home/michael/Desktop/Training/Training/the-newsroom-prismic/slices";

export default function Page({ page }) {
  return (
    <div className="flex items-center flex-col mb-[3rem]">
      <SliceZone slices={page.data.slices} components={components} />
      <button>
        <Link href="/">Back home</Link>
      </button>
    </div>
  );
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const page = await client.getByUID("trending_article", params.uid);

  return {
    props: {
      page,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("trending_article");

  return {
    paths: pages.map((page: any) => prismicH.asLink(page)),
    fallback: false,
  };
}
