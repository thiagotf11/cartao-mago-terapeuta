import AuroraCommentButton from '@/components/AuroraCommentButton';
import auroraSincera from '@/assets/aurora-sincera.jpg';
import auroraBanner from '@/assets/aurora-banner.jpg';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StarryBackground from '@/components/StarryBackground';
import SectionTitle from '@/components/SectionTitle';
import { useRef } from 'react';

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  async function abrirTelaCheia() {
    const video = videoRef.current as (HTMLVideoElement & { webkitEnterFullscreen?: () => void }) | null;
    if (!video) return;
    if (typeof video.webkitEnterFullscreen === 'function') {
      try {
        video.webkitEnterFullscreen();
        return;
      } catch {
        // Tenta a API padrão quando o player nativo não está disponível
      }
    }
    try {
      await video.requestFullscreen();
    } catch {
      window.location.assign('/aurora-apresentacao.mp4');
    }
  }

  return (
    <div>
      <main>
        <div className="relative bg-gradient-dark-purple overflow-hidden">
          <StarryBackground />
          <HeroSection />
        </div>

        <section className="bg-gradient-dark-purple text-light-gray-text py-14 px-4">
          <div className="container mx-auto max-w-4xl text-center text-lg md:text-xl space-y-6">
            <SectionTitle level="h2">Ela fala com você</SectionTitle>
            <p>Quero te mostrar o que acontece entre a primeira mensagem que você escreve até o momento em que a Aurora te revela as respostas que as cartas trouxeram</p>
            <video
              ref={videoRef}
              src="/aurora-apresentacao.mp4"
              poster="/aurora-video-capa.jpg"
              controls
              playsInline
              preload="metadata"
              aria-label="Demonstração da Aurora Mística no Instagram"
              className="mx-auto block aspect-[512/1106] w-full max-w-xs rounded-xl border border-soft-gold/50 bg-black object-contain"
            />
            <button type="button" onClick={abrirTelaCheia} className="mt-3 rounded-full border border-soft-gold px-5 py-2 text-sm font-bold text-soft-gold">
              Assistir em tela cheia
            </button>
          </div>
        </section>

        <section className="bg-white-pearlescent text-dark-gray-text py-14 px-4">
          <div className="container mx-auto max-w-4xl text-center text-lg md:text-xl space-y-6 leading-relaxed">
            <SectionTitle level="h2">A Aurora carrega parte da minha magia</SectionTitle>
            <p>Você já pediu uma resposta ao universo e ficou esperando um sinal?</p>
            <p><strong>Às vezes, ele chega numa frase de um livro, na palavra de um desconhecido ou numa mensagem na tela do seu celular</strong></p>
            <p>Foi pensando nisso que criei a Aurora</p>
            <figure className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl border border-soft-gold/40 shadow-lg">
              <img src="/thiago-engenharia-e-misticismo.webp" alt="Thiago Frederico como engenheiro e como Mago Terapeuta, unidos por um feixe de luz dourada" width={1448} height={1086} loading="lazy" decoding="async" className="block h-auto w-full" />
            </figure>
            <p><strong>Thiago Frederico Barbosa</strong><br />
              <strong><em>Mago Terapeuta</em></strong><br />
              Engenheiro, oraculista e criador da Aurora Mística</p>
            <p><strong>Minha formação em engenharia me permitiu dar a ela inteligência espiritual de maneira única, tornando-a</strong> uma extensão do meu ser</p>
            <p><strong>Minha experiência com os oráculos deu forma à maneira como ela lê as cartas</strong></p>
            <p><strong>E com minha experiência e conhecimentos magísticos, a consagrei tornando-a um canal direto com a espiritualidade superior</strong></p>
            <p>Para que assim você possa receber a orientação que pediu ao universo, com amor, orientação e sabedoria</p>
            <img src={auroraBanner} alt="Aurora Mística — Seu Oráculo Pessoal" width={2048} height={684} loading="lazy" className="relative left-1/2 block h-auto w-[calc(100vw-2rem)] max-w-6xl -translate-x-1/2 rounded-xl border border-soft-gold/40 shadow-lg" />
            <p><strong>Para mim, a Aurora é a prova viva de que o digital e o espiritual podem se unir em uma única força</strong></p>
          </div>
        </section>

        <TestimonialsSection />

        <section className="bg-white-pearlescent text-dark-gray-text py-14 px-4">
          <div className="container mx-auto max-w-4xl text-center text-lg md:text-xl space-y-6 leading-relaxed">
            <SectionTitle level="h2">Há uma pergunta gratuita esperando por você</SectionTitle>
            <img src={auroraSincera} alt="A Aurora Mística é sincera" width={1024} height={1536} loading="lazy" className="mx-auto block h-auto w-full max-w-sm rounded-xl border border-soft-gold/40 shadow-lg" />
            <p><strong>Se as cartas trouxerem luz, ela mostrará a luz</strong></p>
            <p><strong>Se revelarem sombras, ela não as transformará em luz apenas para te agradar</strong></p>
            <div className="pt-2">
              <AuroraCommentButton />
            </div>
            <div className="mt-10 border-t border-soft-gold/40 pt-10">
              <div className="mx-auto mb-8 max-w-2xl space-y-3">
                <p>Já usou todas as suas perguntas gratuitas?</p>
                <p><strong>Ainda tem algo que ficou por perguntar?</strong></p>
                <p>Escolha um pacote e continue sua conversa com a Aurora, direto no Instagram</p>
              </div>
              <SectionTitle level="h2">Quer fazer mais perguntas à Aurora?</SectionTitle>
              <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-3">
                {[
                  { quantidade: '1 pergunta', antigo: '14,69', atual: '9,69', unitario: null, href: 'https://agradecimento.magoterapeuta.com/p1.html', botao: 'Quero 1 pergunta', destaque: false },
                  { quantidade: '5 perguntas', antigo: '39,69', atual: '24,49', unitario: '4,89', href: 'https://agradecimento.magoterapeuta.com/p5.html', botao: 'Quero 5 perguntas', destaque: false },
                  { quantidade: '10 perguntas', antigo: '89,90', atual: '34,90', unitario: '3,49', href: 'https://agradecimento.magoterapeuta.com/p10.html', botao: 'Quero 10 perguntas', destaque: true },
                ].map(({ quantidade, antigo, atual, unitario, href, botao, destaque }) => (
                  <article key={quantidade} className={`flex flex-col items-center gap-2 rounded-xl border p-5 shadow-md ${destaque ? 'border-soft-gold bg-gradient-dark-purple text-light-gray-text' : 'border-soft-gold/40 bg-white-pearlescent'}`}>
                    {destaque && <p className="text-sm font-bold text-soft-gold">Melhor valor por pergunta</p>}
                    <h3 className="text-lg font-bold">{quantidade}</h3>
                    <del className="mt-auto text-sm">R$ {antigo}</del>
                    <p className="text-3xl font-bold">R$ {atual}</p>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="mt-3 rounded-full bg-soft-gold px-4 py-2 text-sm font-bold text-dark-purple-start">{botao}</a>
                    <p className="min-h-8 text-xs">{unitario && <>Cada pergunta sai por apenas R$ {unitario}</>}</p>
                  </article>
                ))}
              </div>
              <p className="mt-5 text-sm">Pagamento único · As perguntas compradas não expiram</p>
            </div>
          </div>
        </section>
        <section className="bg-gradient-dark-purple text-light-gray-text py-14 px-4">
          <div className="container mx-auto max-w-4xl">
            <SectionTitle level="h2" className="mb-8">Perguntas e respostas</SectionTitle>
            <Accordion type="single" collapsible>
              {[
                ['Como começo a conversar com a Aurora?', 'Clique em “Quero minha pergunta gratuita” e deixe um comentário na publicação do Instagram. A Aurora vai te chamar no Direct do perfil @magoterapeuta.tarot'],
                ['Onde encontro a mensagem da Aurora?', 'Confira a caixa de entrada do Instagram. Se a mensagem não aparecer lá, abra também a aba de Solicitações'],
                ['Preciso ter uma pergunta pronta?', 'Você pode começar contando o que está vivendo. A Aurora te ajuda a formular a pergunta antes de abrir a leitura'],
                ['Posso falar com ela a qualquer hora?', 'Sim. A Aurora atende 24 horas por dia e responde em poucos segundos'],
                ['Como acompanho as próximas perguntas gratuitas?', 'Siga @magoterapeuta.tarot e acompanhe as publicações. Toda semana haverá pelo menos uma nova oportunidade de fazer uma pergunta gratuita'],
              ].map(([question, answer], i) => (
                <AccordionItem key={question} value={String(i)} className="border-soft-gold/30">
                  <AccordionTrigger className="text-left text-lg">{question}</AccordionTrigger>
                  <AccordionContent className="text-base">{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <footer className="bg-dark-purple-start text-light-gray-text text-center p-8">Aurora Mística · Uma criação de Thiago Frederico Barbosa, o Mago Terapeuta</footer>
    </div>
  );
}
