# Travel App

Guia de escalada em rocha no Brasil. O mapa e os cartões usam a curadoria em [`constants/climbing.ts`](constants/climbing.ts).

## Rodar localmente

```bash
npm ci
npm run dev
```

Abra [localhost:3000](http://localhost:3000).

## Google Maps

Por padrão, o site carrega a visualização pública incorporada do Google Maps, sem chave. A lista e os links para abrir o mapa ou traçar uma rota continuam disponíveis se o navegador bloquear a incorporação.

Para usar a [Maps Embed API oficial](https://developers.google.com/maps/documentation/embed/get-started), habilite-a no Google Cloud e defina `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` no ambiente de build ou em `.env.local`. Reinicie o servidor local depois de mudar essa variável. A chave de incorporação é visível ao navegador por design: use uma chave dedicada, restrita à Maps Embed API e aos domínios autorizados. Mantenha `.env.local` fora do Git.
