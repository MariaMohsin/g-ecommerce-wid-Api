/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
// import { defineCliConfig } from 'sanity/cli'

// const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
// const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

// export default defineCliConfig({ api: { projectId, dataset } })

import { createClient } from "@sanity/client";



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "jlje4tax";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  throw new Error("Missing Sanity configuration. Please check your .env file.");
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion: "2023-01-01", // Use your desired API version
  useCdn: false, // Set to `true` if you don't need draft content
  token: process.env.token ,// Only include this if you need to fetch private or draft content
});

export default sanityClient;

