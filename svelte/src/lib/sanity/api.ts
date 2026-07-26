import {
    PUBLIC_SANITY_DATASET,
    PUBLIC_SANITY_PROJECT_ID
} from '$env/static/public';

function assertEnvVar(
    value: string | undefined,
    name: string
): string {
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }

    return value;

}

export const dataset = assertEnvVar(
    PUBLIC_SANITY_DATASET,
    'PUBLIC_SANITY_DATASET'
);

export const projectId = assertEnvVar(
    PUBLIC_SANITY_PROJECT_ID,
    'PUBLIC_SANITY_PROJECT_ID'
);

export const apiVersion = '2026-07-25'