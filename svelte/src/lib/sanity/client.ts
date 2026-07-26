import { createClient } from '@sanity/client';
import {
    dataset,
    projectId,
    apiVersion
} from '$lib/sanity/api';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true
});