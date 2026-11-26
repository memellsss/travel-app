# Travel App

**Encontre seu próximo pico de escalada no Brasil.** O Travel App reúne destinos de escalada em rocha para ajudar você a escolher uma região, localizar o destino no mapa e planejar a visita.

![Pedra do Baú na Serra da Mantiqueira ao pôr do sol](./public/climbing-hero.webp)

*Pedra do Baú, São Bento do Sapucaí (SP). Foto de [Rodrigorosa85][foto-capa], [CC BY-SA 4.0][licenca-capa], redimensionada e convertida para WebP.*

## Explore o guia

1. Em **Mapa**, busque pelo nome do pico, pela cidade ou pelo estado. Você também pode filtrar por escalada esportiva, tradicional ou boulder.
2. Selecione um destino para vê-lo no mapa incorporado. Use **Como chegar** para traçar uma rota ou abra o local no **Google Maps**.
3. Em **Destinos**, confira os três destaques com fotos. No **Guia**, veja o que checar sobre previsão do tempo, acesso e escolha da via antes de sair.

### Destinos cadastrados

| Destino | Localização | Modalidade |
| --- | --- | --- |
| Pedra do Baú | São Bento do Sapucaí, SP | Tradicional |
| Serra do Cipó | Santana do Riacho, MG | Esportiva |
| Igatu | Andaraí, BA | Boulder |
| Morro da Urca | Rio de Janeiro, RJ | Tradicional |
| Morro do Anhangava | Quatro Barras, PR | Esportiva |
| Cocalzinho de Goiás | Cocalzinho de Goiás, GO | Boulder |

Os pontos no mapa são referências para a região de escalada. Consulte o croqui e confirme o acesso antes de seguir para um setor ou via específica.

## Rodar localmente

Você precisa de Git, Node.js e npm. O build foi verificado com Node.js 24.

```bash
git clone https://github.com/memellsss/travel-app.git
cd travel-app
npm ci
npm run dev
```

Abra [localhost:3000](http://localhost:3000). Para verificar a versão de produção, use `npm run build`.

## Como funciona o Google Maps

O site usa por padrão a visualização pública incorporada do Google Maps, **sem precisar de uma chave no projeto**. Se o navegador bloquear a incorporação, os links **Google Maps** e **Como chegar** continuam disponíveis para abrir o destino fora do site.

### Configuração opcional da Maps Embed API

1. Habilite a [Maps Embed API][maps-embed] em um projeto do Google Cloud.
2. Crie uma chave dedicada e restrinja seu uso à **Maps Embed API** e aos domínios autorizados.
3. Defina a variável abaixo em `.env.local`, na raiz do projeto, ou no ambiente onde o site é compilado:

   ```dotenv
   NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY=sua_chave_de_incorporacao
   ```

4. Reinicie o servidor local ou gere um novo build para aplicar a configuração.

A chave de incorporação é visível ao navegador por design. As restrições no Google Cloud limitam onde ela pode ser usada. O `.gitignore` mantém `.env` e os arquivos de configuração locais fora do Git.

## Sobre o projeto

O site usa **Next.js (App Router), React e TypeScript**. Os destinos vêm de uma lista mantida no projeto, e a busca e os filtros funcionam no navegador.

- [`constants/climbing.ts`](constants/climbing.ts) — cadastro dos picos, modalidades, descrições e buscas do Google Maps.
- [`components/ClimbingExplorer.tsx`](components/ClimbingExplorer.tsx) — busca, filtros, mapa e cartões de destinos.
- [`components/ClimbingGuide.tsx`](components/ClimbingGuide.tsx) — orientações para planejar a visita.

Os créditos das demais fotos estão no rodapé do site.

[foto-capa]: https://commons.wikimedia.org/wiki/File:Monumento_Natural_Estadual_da_Pedra_do_Ba%C3%BA_Rodrigo_Rosa_(01).jpg
[licenca-capa]: https://creativecommons.org/licenses/by-sa/4.0/
[maps-embed]: https://developers.google.com/maps/documentation/embed/get-started
