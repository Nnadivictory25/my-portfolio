import { error } from '@sveltejs/kit';
import { getTweet } from 'sveltweet/api';

export async function load() {
    const id = '1900868301858705431'
    try {
        const tweet = await getTweet(id);

        return { tweet };
    }
    catch {
        return error(500, 'Could not load tweet');
    }
}
