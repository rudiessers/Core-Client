import type { PageLoad } from './$types';
import type {Item} from "$lib/types/item";

export const load = (async ({ fetch, params }) => {
    const response = await fetch(`http://localhost:5092/api/items/${params.id}`);

    const item: Item = await response.json();

    return {
        item: item
    }

}) satisfies PageLoad;