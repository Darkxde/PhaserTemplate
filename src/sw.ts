import { precacheAndRoute } from 'workbox-precaching';

declare var self: ServiceWorkerGlobalScope & typeof globalThis;

precacheAndRoute(self.__WB_MANIFEST);
