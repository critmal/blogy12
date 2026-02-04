import createClient from "@sanity/client"

const client = createClient({
    projectId: "4hqs26rj",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-03-08"
})
export default client
