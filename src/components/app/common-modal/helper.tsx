export const formatBody = (body: string | Array<string>) => {
    if (Array.isArray(body)) {
        body.map(item => {
            <p>{item}</p>
        })
    }
    return body;
};