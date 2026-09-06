import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        rentals: resolve(__dirname, "rentals.html"),
        rental: resolve(__dirname, "rental.html"),
        book: resolve(__dirname, "book.html"),
        listings: resolve(__dirname, "listings.html"),
        listing: resolve(__dirname, "listing.html"),
        buy: resolve(__dirname, "buy.html"),
        sell: resolve(__dirname, "sell.html"),
        invest: resolve(__dirname, "invest.html"),
        market: resolve(__dirname, "market.html"),
        managers: resolve(__dirname, "managers.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        faq: resolve(__dirname, "faq.html"),
        reviews: resolve(__dirname, "reviews.html"),
        ownerPortal: resolve(__dirname, "owner-portal.html"),
        agentPortal: resolve(__dirname, "agent-portal.html"),
        admin: resolve(__dirname, "admin.html"),
        itinerary: resolve(__dirname, "itinerary.html"),
        agents: resolve(__dirname, "agents.html"),
      },
    },
  },
});
