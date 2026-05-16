FROM node:20-alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run prisma:generate
RUN npm run build

FROM node:20-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=base /app/package.json ./
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/.next ./.next
COPY --from=base /app/public ./public
COPY --from=base /app/prisma ./prisma
COPY --from=base /app/next.config.mjs ./next.config.mjs
COPY --from=base /app/next-env.d.ts ./next-env.d.ts
COPY --from=base /app/tsconfig.json ./tsconfig.json

EXPOSE 3000
CMD ["npm", "start"]
