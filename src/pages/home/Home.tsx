import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="w-full h-screen bg-DoctorBackground bg-cover bg-no-repeat">
        <div className="w-full h-full bg-red-500/40 flex flex-col justify-center items-center">
          <h1 className="text-6xl text-white font-bold">Bem vindos a Farmácia Saude pra todos!</h1>
          <Link to='/cadastroCategoria' className="border border-white p-4 text-white text-lg mt-10">Cadastrar Categoria</Link>
        </div>
      </div>

      <div className="flex flex-col px-12 my-6 justify-center items-center text-lg text-justify gap-4">
        <h2 className="text-2xl">Sobre Nós</h2>
        <p>
          Bem-vindo à Saúde para Todos, o seu destino confiável para saúde e bem-estar. Fundada com a missão de cuidar da comunidade, nossa farmácia se empenha em oferecer produtos e serviços de alta qualidade, promovendo uma vida saudável e feliz.
        </p>
        <p>
          Desde a nossa inauguração, temos o compromisso de fornecer atendimento personalizado e aconselhamento especializado. Nossa equipe dedicada de farmacêuticos está aqui para responder às suas perguntas, oferecer orientações sobre medicamentos e garantir que você receba os cuidados de que precisa.
        </p>
        <p>
          Na Saúde para Todos, valorizamos a sua saúde e conveniência. Nosso amplo estoque de medicamentos, produtos de cuidados pessoais e itens de saúde permite que você encontre tudo o que precisa em um só lugar. Além disso, trabalhamos arduamente para garantir preços justos e acessíveis, tornando os cuidados com a saúde acessíveis a todos.
        </p>
        <p>
          Acreditamos na importância da educação em saúde. Por isso, não apenas fornecemos produtos, mas também recursos informativos para capacitá-lo a tomar decisões conscientes sobre sua saúde. Explore nosso site para artigos, dicas e informações valiosas que podem ajudá-lo a alcançar seus objetivos de bem-estar.
        </p>
        <p>
          Estamos orgulhosos de fazer parte desta comunidade e de ser a sua escolha confiável para cuidados com a saúde. A Saúde para Todos é mais do que uma farmácia - somos seus parceiros dedicados em busca de uma vida mais saudável e feliz. Obrigado por confiar em nós para cuidar de você e de seus entes queridos.
        </p>
      </div>
    </>
  )
}

export default Home;