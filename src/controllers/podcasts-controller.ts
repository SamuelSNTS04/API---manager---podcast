import { IncomingMessage, ServerResponse } from 'http';


export const getListEpisodes = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({
        name: "samuel"
    }));
}