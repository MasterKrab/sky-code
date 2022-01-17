import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";

cleanupOutdatedCaches();

declare let self: ServiceWorkerGlobalScope;

precacheAndRoute(self.__WB_MANIFEST);
