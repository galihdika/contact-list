import { rest } from "msw"

export const getAvatar = (userName: string) => {
  return rest.get(`https://avatars.dicebear.com/v2/avataaars/${userName}.svg?options[mood][]=happy`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.body('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" fill="none"><metadata><rdf:RDF><cc:Work><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title>Avataaars</dc:title><dc:creator><cc:Agent><dc:title>Pablo Stanley</dc:title></cc:Agent></dc:creator><dc:source>https://avataaars.com/</dc:source><cc:license rdf:resource="https://avataaars.com/"/><dc:contributor><cc:Agent><dc:title>Florian Körner</dc:title></cc:Agent></dc:contributor></cc:Work></rdf:RDF></metadata><mask id="avatarsRadiusMask"><rect width="280" height="280" rx="0" ry="0" x="0" y="0" fill="#fff"/></mask><g mask="url(#avatarsRadiusMask)"><g transform="translate(40, 36)"><path d="M100 0C69.072 0 44 25.072 44 56v6.166c-5.675.952-10 5.888-10 11.834v14c0 6.052 4.48 11.058 10.305 11.881 2.067 19.806 14.458 36.541 31.695 44.73V163h-4c-39.764 0-72 32.236-72 72v9h200v-9c0-39.764-32.236-72-72-72h-4v-18.389c17.237-8.189 29.628-24.924 31.695-44.73C161.52 99.058 166 94.052 166 88V74c0-5.946-4.325-10.882-10-11.834V56c0-30.928-25.072-56-56-56z" fill="#F9D562"/><path d="M76 144.611v8A55.79 55.79 0 00100 158a55.789 55.789 0 0024-5.389v-8A55.789 55.789 0 01100 150a55.79 55.79 0 01-24-5.389z" fill="#000" fill-opacity=".1"/></g><g transform="translate(8, 170)"><path d="M132 57.052c14.912 0 27-11.193 27-25 0-1.015-.065-2.017-.192-3H160c39.764 0 72 32.235 72 72V110H32v-8.948c0-39.765 32.236-72 72-72h1.192a23.418 23.418 0 00-.192 3c0 13.807 12.088 25 27 25z" fill="#E6E6E6"/><path d="M100.778 29.122c.072-.378.145-.752.222-1.122-2.959.054-6 1-6 1l-.42.662C59.267 34.276 32 64.48 32 101.052V110h74s-10.7-51.555-5.238-80.793l.023-.085h-.007zM158 110s11-53 5-82c2.959.054 6 1 6 1l.419.662C204.733 34.276 232 64.48 232 101.052V110h-74z" fill="#A7FFC4"/><path d="M183.423 85.77l.871-2.24 6.262-4.697a4 4 0 014.856.043L202 84l-18.577 1.77z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M101 28c-6 29 5 82 5 82H90L76 74l6-9-6-6 19-30s3.041-.946 6-1zm62 0c6 29-5 82-5 82h16l14-36-6-9 6-6-19-30s-3.041-.946-6-1z" fill="#000" fill-opacity=".15"/><path d="M108 21.539c-6.772 4.597-11 11.117-11 18.349 0 7.4 4.428 14.057 11.48 18.669l5.941-4.68 4.579.33-1-3.15.078-.062C111.978 47.853 108 42.7 108 36.877V21.539zm48 15.338c0 5.823-3.978 10.976-10.078 14.118l.078.062-1 3.15 4.579-.33 5.941 4.68c7.052-4.612 11.48-11.268 11.48-18.67 0-7.23-4.228-13.751-11-18.348v15.338z" fill="#F2F2F2"/></g><g transform="translate(86, 134)"><path d="M40 16c0 5.372 6.158 9 14 9s14-3.628 14-9c0-1.105-.95-2-2-2-1.293 0-1.87.905-2 2-1.242 2.938-4.317 4.716-10 5-5.683-.284-8.758-2.062-10-5-.13-1.095-.707-2-2-2-1.05 0-2 .895-2 2z" fill="#000" fill-opacity=".6"/></g><g transform="translate(112, 122)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 8c0 4.418 5.373 8 12 8s12-3.582 12-8" fill="#000" fill-opacity=".16"/></g><g transform="translate(84, 90)"><path d="M44 22c0 7.732-6.268 14-14 14s-14-6.268-14-14S22.268 8 30 8s14 6.268 14 14zm52 0c0 7.732-6.268 14-14 14s-14-6.268-14-14S74.268 8 82 8s14 6.268 14 14z" fill="#fff"/><path d="M36 14a6 6 0 11-12 0 6 6 0 0112 0zm52 0a6 6 0 11-12 0 6 6 0 0112 0z" fill="#000" fill-opacity=".7"/></g><g transform="translate(84, 82)"><path fill-rule="evenodd" clip-rule="evenodd" d="M22.766 1.578l.911-.402C28.92-.905 36.865-.033 41.723 2.299c.567.272.18 1.153-.402 1.108-14.919-1.151-24.963 8.146-28.375 14.44-.101.187-.407.208-.482.034-2.308-5.319 4.45-13.985 10.302-16.303zM86.993 12.07c5.761.773 14.746 5.795 13.994 11.607-.024.19-.312.25-.436.091-2.487-3.188-21.712-7.872-28.713-6.894-.641.09-1.064-.571-.627-.984 3.744-3.536 10.62-4.518 15.782-3.82z" fill="#000" fill-opacity=".6"/></g><g transform="translate(7, 0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M167.309 35.006c-20.188-11.7-40.18-9.784-55.272-5.976-15.092 3.808-24.02 14.621-31.68 30.618-3.761 7.855-5.991 17.143-6.334 25.833-.135 3.412.325 6.934 1.245 10.22.337 1.205 2.155 5.386 2.654 2.008.166-1.125-.442-2.676-.5-3.871-.078-1.569.005-3.157.112-4.723.2-2.928.722-5.8 1.65-8.59 1.328-3.988 3.017-8.312 5.603-11.677 6.401-8.328 17.482-8.802 26.279-13.384-.763 1.405-3.706 3.68-2.687 5.263.705 1.094 3.37.762 4.643.727 3.349-.092 6.713-.674 10.021-1.147 5.213-.745 10.098-2.255 15.004-4.089 4.016-1.502 8.603-2.892 11.622-6.078 4.871 5.048 11.141 9.794 17.401 13.003 5.618 2.88 14.679 4.318 18.113 10.158 4.065 6.914 2.195 15.406 3.436 22.9.472 2.85 1.545 2.786 2.132.237.997-4.33 1.468-8.828 1.151-13.279-.718-10.048-4.405-36.453-24.593-48.153z" fill="#C93305"/></g></g></svg>')
    )
  });
}