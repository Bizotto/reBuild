import { PlayerCard } from '@/components/PlayerCard';
import nick from '@/assets/ProfileImages/nick.jpg';
import jen from '@/assets/ProfileImages/jen.jpg';
import mat from '@/assets/ProfileImages/mat.jpg';
import jao from '@/assets/ProfileImages/jao.jpeg';
import marc from '@/assets/ProfileImages/marc.jpg';
import carl from '@/assets/ProfileImages/carl.jpg';
import lean from '@/assets/ProfileImages/lea.jpg';
import igo from '@/assets/ProfileImages/igao.jpg';
import { GoBack } from '@/components/GoBack';

export default function OurTeam() {
  return (
    <div className="max-w-7xl space-y-10 my-10 mx-auto">
      <GoBack />
      <div className="flex justify-center">
        <h1 className="text-[40px] itens-center font-bold">Nosso time</h1>
      </div>

      <PlayerCard
        github="https://github.com/Bizotto"
        name="Nicolas Bizotto"
        role="Desenvolvedor"
        linkedin="https://www.linkedin.com/in/nicolas-bizotto/"
        image={nick}
      />
      <PlayerCard
        github="https://github.com/CarlosBerken"
        name="Carlos Berkenbrock"
        role="Desenvolvedor"
        linkedin="https://www.linkedin.com/in/carlos-henrique-agostinho-berkenbrock-33875516a/"
        image={carl}
      />
      <PlayerCard
        github="https://github.com/igorjosemartins"
        name="Igor Martins"
        role="Desenvolvedor"
        linkedin="https://www.linkedin.com/in/igor-josé-martins/"
        image={igo}
      />
      <PlayerCard
        github="https://github.com/jenifferbaron"
        name="Jeniffer Baron"
        role="Gestora de projetos"
        linkedin="https://www.linkedin.com/in/jeniffer-baron/"
        image={jen}
      />
      <PlayerCard
        github="https://github.com/Mateusuplicy"
        name="Mateus Suplicy"
        role="Analista"
        linkedin="https://www.linkedin.com/in/mateus-lemos-suplicy-42066612b/"
        image={mat}
      />
      <PlayerCard
        github="https://github.com/Mattuza"
        name="João Lunelli"
        role="Analista"
        linkedin="https://www.linkedin.com/in/jo%C3%A3o-lunelli-451999193"
        image={jao}
      />
      <PlayerCard
        github="https://github.com/MarcoScoz"
        name="Marco Scozs"
        role="Desenvolvedor"
        linkedin="https://www.linkedin.com/in/marco-aur%C3%A9lio-lang-scoz-7861ba97/"
        image={marc}
      />
      <PlayerCard
        github="https://github.com/Leandro22061988"
        name="Leandro Viana"
        role="Desenvolvedor"
        linkedin="https://www.linkedin.com/in/leandro-viana-6ab8a9253/"
        image={lean}
      />
    </div>
  );
}
