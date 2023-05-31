import type { PageLoad } from './$types'
import type { Item } from '$lib/types/item'

export const load = (async ( {fetch} ) => {
    const response = await fetch('http://localhost:5092/api/items');

    const items: Item[] = await response.json();

    return {
        items: items
    }
}) satisfies PageLoad;