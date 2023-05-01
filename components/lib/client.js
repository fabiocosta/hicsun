import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'csd0yn0e',
    dataset: 'production',
    apiVersion: '2023-04-20',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

//const fileBuilder = buildFileUrl(client);
//export const fileUrl = (source) => fileBuilder.file(source);

export const urlFor = (source) => builder.image(source);
