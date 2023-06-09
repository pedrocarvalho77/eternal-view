import { defineConfig } from "sanity";
import { deskTool} from "sanity/desk";
import schemas from "./sanity/schemas";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
    projectId: "cg0mxwyz",
    dataset: "production",
    title: "My Personal Webiste",
    apiVersion: "2023-06-05",
    basePath: "/admin",
    plugins: [deskTool(), visionTool()],
    schema: { types: schemas}
})

export default config;