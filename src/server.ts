import http from 'http';
import { getListEpisodes } from './controllers/podcasts-controller'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {
    if(req.method === "GET"){
        await getListEpisodes(req, res);
    }
});

const port = process.env.port;

server.listen(port, () => {
    console.log(`servidor iniciado na porta ${port}`);
})