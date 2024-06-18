import { GetFileUrl } from "@/actions/file/getFileUrl";
import { File } from "@prisma/client";

export async function DownloadSingleFileAsBlob(fileMeta: File, setPercentage: (p: number) => void) {
    const downloadUrl = await GetFileUrl(fileMeta.id);
    if (!downloadUrl) {
        throw new Error("File url might not exist")
    }

    const response = await fetch(downloadUrl);
    const reader = response.body?.getReader()
    if (!reader) {
        throw new Error("Reader could not be obtained");
    }

    const _contentLength = response.headers.get('Content-Length');
    if (!_contentLength) {
        throw new Error("Missing headers");
    }
    const contentLength = +_contentLength;

    let recievedLength = 0;
    let chunks = [];
    while (true) {
        const { done, value } = await reader.read();

        if (done) {
            break;
        }

        chunks.push(value);
        recievedLength += value.length;

        const percentage = Math.floor((recievedLength / contentLength) * 100)
        setPercentage(percentage)
    }
    return { data: new Blob(chunks), id: fileMeta.id }
}