// TODO: increase `version` number to force cache update when publishing a new release
const version = 'v2';

const config = {
    cacheRemote: true,
    version: version+'::',
    preCachingItems: [
        'app.bundle.js',
        'index.html',
        'offline.html',
        '404.html',
        'sw.js'
    ],
    blacklistCacheItems: [
        'index.html',
        'service-worker.js'
    ],
    offlineImage: '<svg role="img" aria-labelledby="offline-title"' + ' viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">' + '<title id="offline-title">Offline</title>' + '<g fill="none" fill-rule="evenodd"><path fill="#121212" d="M0 0h400v300H0z"/>' + '<text fill="#aaa" font-family="monospace" font-size="32" font-weight="bold">' + '<tspan x="136" y="156">offline</tspan></text></g></svg>',
    offlinePage: 'offline.html',
    notFoundPage: '404.html',
    offlineTmdbResults: {
        page: 1,
        results: [{
            "title": "Offline",
            "poster_path": "https://tmdb.org/offline.jpg",
            "backdrop_path": "https://tmdb.org/offline.jpg",
            "overview": ""
        }],
        total_pages: 1,
        total_results: 1
    }
};
