import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
    //define o contrato
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    //busca os dados
    const data = await repositoryPodcast();
    
    //verifico o tipo de resposta
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
}