import { PodcastTransferModel } from "../models/Podcast-Transfer-Model";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (podcastName: string | undefined): Promise <PodcastTransferModel> => {
    //define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode: 0,
        body: []
    };

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    let data = await repositoryPodcast(queryString);

    //verifica se tem conteúdo
    if (data.length !== 0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NoContent;
    }

    responseFormat.body = data;

    return responseFormat;
}