import { groq } from "next-sanity";
import { client } from "./client";

export async function getProjects() {
  return client.fetch(
    groq`*[_type == "project"]{
        _id, 
        name,
        "slug": slug.current,
        tagline,
        "logo": logo.asset->url,
      }`
  );
}

export async function getSingleProject(unslug: string) {
  let slug = "/" + unslug;
  try {
    const result = await client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        name,
        projectUrl,
        coverImage { alt, "image": asset->url },
        tagline,
        description
      }`,
      { slug }
    );

    slug = unslug;

    const result2 = await client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        name,
        projectUrl,
        coverImage { alt, "image": asset->url },
        tagline,
        description
      }`,
      { slug }
    );
    if (!result) {
      return result2;
    }

    return result; // Return the fetched project data
  } catch (error) {
    console.error("Error fetching single project:", error);
    throw error;
  }
}
