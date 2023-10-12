# Frontend Mentor - rastreador de endereço IP

![Visualização do design do desafio de codificação do rastreador de endereço IP](./design/desktop-preview.jpg)

## Bem-vindo! 👋

Obrigado por conferir este desafio de codificação front-end.

Os desafios do [Frontend Mentor](https://www.frontendmentor.io) ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

**Para fazer este desafio, você precisa de um conhecimento básico de HTML, CSS e JavaScript.**

## O desafio

Seu desafio é construir este aplicativo IP Address Tracker e fazer com que pareça o mais próximo possível do design. Para obter os locais dos endereços IP, você usará a [API de geolocalização IP da IPify](https://geo.ipify.org/). Para gerar o mapa, recomendamos usar [LeafletJS](https://leafletjs.com/).

Você pode usar qualquer ferramenta que desejar para ajudá-lo a completar o desafio. Então, se você tem algo que gostaria de praticar, sinta-se à vontade para tentar.

Seus usuários devem ser capazes de:

- Veja o layout ideal para cada página dependendo do tamanho da tela do dispositivo
- Veja os estados de foco para todos os elementos interativos na página
- Veja seu próprio endereço IP no mapa no carregamento inicial da página
- Pesquise quaisquer endereços IP ou domínios e veja as principais informações e localização

---

⚠️ **IMPORTANTE** ⚠️: Para usar a API de geolocalização IP do IPify, você precisará se inscrever para uma conta gratuita. Você não precisará adicionar nenhum detalhe do cartão para fazer isso e é um processo muito rápido. Isso irá gerar uma chave de API para você. Normalmente, você seria capaz de restringir sua chave de API a um URL específico (seu próprio domínio). Isso garante que outras pessoas não possam usar sua chave de API em seus próprios sites. O IPify não possui esse recurso, mas como você não está adicionando os detalhes do seu cartão, isso não é um problema. **Portanto, certifique-se de se inscrever apenas para a conta gratuita e NÃO insira nenhum dado do cartão**.

Para a API de mapeamento, recomendamos usar [LeafletJS](https://leafletjs.com/). O uso é gratuito e não requer uma chave de API. Se você decidir usar outra API, como Google Maps ou Mapbox, certifique-se de proteger sua chave de API. Aqui estão os guias do Google Maps e do Mapbox, certifique-se de lê-los completamente:

- [Práticas recomendadas para chaves de API do Google Developers](https://developers.google.com/maps/api-key-best-practices)
- [Como usar o Mapbox com segurança](https://docs.mapbox.com/help/troubleshooting/how-to-use-mapbox-securely/)

Expor sua chave de API publicamente pode fazer com que outras pessoas a utilizem para fazer solicitações para seus próprios aplicativos, se as devidas precauções não forem tomadas. Certifique-se de ler os guias cuidadosamente e seguir suas recomendações.

**Não assumimos qualquer responsabilidade se você expor sua chave de API ao concluir o desafio e não a tiver protegido.**

---

Quer algum apoio no desafio? [Junte-se à nossa comunidade no Slack](https://www.frontendmentor.io/slack) e faça perguntas no canal **#help**.

## Onde encontrar tudo

Sua tarefa é construir o projeto com os designs dentro da pasta `/design`. Você encontrará uma versão móvel e uma versão desktop do design.

Os designs estão em formato estático JPG. Usar JPGs significa que você precisará usar seu bom senso para estilos como `tamanho da fonte`, `preenchimento` e `margem`.

Se desejar que os arquivos de design (fornecemos versões Sketch e Figma) inspecionem o design com mais detalhes, você pode [inscrever-se como membro PRO] (https://www.frontendmentor.io/pro).

Você encontrará todos os ativos necessários na pasta `/images`. Os ativos já estão otimizados.

Há também um arquivo `style-guide.md` contendo as informações que você precisa, como paleta de cores e fontes.

## Construindo seu projeto

Sinta-se à vontade para usar qualquer fluxo de trabalho com o qual se sinta confortável. Abaixo está um processo sugerido, mas não parece necessário seguir estas etapas:

1. Inicialize seu projeto como um repositório público no [GitHub](https://github.com/). A criação de um repositório tornará mais fácil compartilhar seu código com a comunidade se você precisar de ajuda. Se você não tiver certeza de como fazer isso, [leia este recurso Try Git](https://try.github.io/).
2. Configure seu repositório para publicar seu código em um endereço da web. Isso também será útil se você precisar de ajuda durante um desafio, pois você pode compartilhar o URL do seu projeto com o URL do seu repositório. Existem várias maneiras de fazer isso e fornecemos algumas recomendações abaixo.
3. Analise os designs para começar a planejar como você abordará o projeto. Esta etapa é crucial para ajudá-lo a pensar no futuro para que as classes CSS criem estilos reutilizáveis.
4. Antes de adicionar qualquer estilo, estruture seu conteúdo com HTML. Escrever seu HTML primeiro pode ajudar a concentrar sua atenção na criação de conteúdo bem estruturado.
5. Escreva os estilos básicos do seu projeto, incluindo estilos de conteúdo geral, como `font-family` e `font-size`.
6. Comece a adicionar estilos ao topo da página e vá descendo. Só passe para a próxima seção quando estiver satisfeito por ter concluído a área em que está trabalhando.

## Implantando seu projeto

Conforme mencionado acima, há muitas maneiras de hospedar seu projeto gratuitamente. Nossa recomendação