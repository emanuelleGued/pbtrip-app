const marcadores = {
  cidades: [
    {
      titulo: "Esperança",
      descricao: "Cidade da Menor Capelinha do Mundo.",
      localizacao: { latitude: -7.0315025, longitude: -35.8569517 },
      imagensdaCidade: "capela-esperanca.webp",
      restaurante: [
        {
          id: 1,
          nome: "Villa Contemporânea",
          descricao: "O melhor da comida chinesa, regional e Sushi da região",
          endereco: "R. Sete de Setembro",
          imagem: require("../Imagens/vilacontemporanea.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/Menu2.png"),
        },
        {
          id: 2,
          nome: "Central Burguer",
          descricao: "Hamburgueres artesanais e lanches em geral",
          endereco: "R. Manoel Rodrigues de Oliveira, 391",
          imagem: require("../Imagens/centralburguer.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/Menu.png"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Capelinha das Pedras",
          descricao: "Visão linda da cidade e a capela é linda",
          endereco: "Beleza dos Campos",
          imagem: require("../Imagens/capelapedras.png"),
          classificacao: 4.8,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Festividade Junina",
          descricao: "Festa de São João",
          endereco: "E. Manoel Rodrigues de Oliveira",
          imagem: require("../Imagens/saojoao.jpeg"),
          classificacao: 4.5,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Pousada Banabuiê",
          descricao: "Pousada no centro da cidade",
          endereco: "R. Dr. Silvino Olávo, 85",
          imagem: require("../Imagens/pousada.PNG"),
          classificacao: 4.4,
        },
        {
          id: 2,
          nome: "Hotel Poliedro",
          descricao: "Bela vista para o centro da cidade",
          endereco: "R. Manoel Rodrigues de Oliveira, 53",
          imagem: require("../Imagens/Hotel.jpg"),
          classificacao: 3.6,
        },
      ],
    },

    {
      titulo: "Areia",
      descricao: "A terra da cultura",
      localizacao: { latitude: -6.9701826, longitude: -35.704251 },
      restaurante: [
        {
          id: 1,
          nome: "Bambu Brasil Restaurante",
          descricao:
            "Um ambiente muito aconchegante, bons pratos e uma bela vista",
          endereco: " R. Padre Chacon, 36",
          imagem: require("../Imagens/Bambu.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/menubambu.jpg"),
        },
        {
          id: 2,
          nome: "Restaurante O Barretão",
          descricao:
            " Ambiente rustico e bem aconchegante com iluminação natural",
          endereco: "Praca Ten. Juvenal Espinola, 444",
          imagem: require("../Imagens/Barretao.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/menubarretao.png"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Casarão Jose Rufino",
          descricao: "Visão linda da cidade e a capela é linda",
          endereco: "R. Verônica Cunha Lima, 282 ",
          imagem: require("../Imagens/casarao.jpg"),
          classificacao: 4.5,
          roteiro:
            "Visita aos engenhos \n \n Passear pelo centrinho \n \n Teatro Minerva \n \n Casa de Pedro Américo",
        },
        {
          id: 2,
          nome: "Engenho Triunfo",
          descricao: "Festa de São João",
          endereco: "Entrada pela casa do doce  ",
          imagem: require("../Imagens/engenho.jpg"),
          classificacao: 4.7,
          roteiro:
            "Degustação da cachaça Triunfo \n \n Visita guiada podendo conhecer cada parte do Engenho \n Visita todo o processo da produção de cachaça \n Finaliza a visita conhecendo um pouco mais sobre a historia do engenho \n \n Visita ao engenho do Cacau \n \n Conhece um pouco mais sobre a fabricação de chocolate do Engenho",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Pousa Villa Real",
          descricao: "Pousada no centro da cidade",
          endereco: "R. Padre Chacon, 36",
          imagem: require("../Imagens/villa.jpeg"),
          classificacao: 4.6,
        },
        {
          id: 2,
          nome: "Hotel Fazenda Triunfo",
          descricao: "Bela vista para o centro da cidade",
          endereco: "Sítio Jussarinha, PB-087",
          imagem: require("../Imagens/triunfo.jpg"),
          classificacao: 4.6,
        },
      ],
    },

    {
      titulo: "Bananeiras",
      descricao:
        "Foi o maior produtor de café da Paraíba e o segundo do Nordeste",
      localizacao: { latitude: -6.6939404, longitude: -35.6046535 },
      restaurante: [
        {
          id: 1,
          nome: "Flor do Mangará",
          descricao: "O melhor da comida chinesa, regional e Sushi da região",
          endereco: "R. C. Antonio Pessoa, 396",
          imagem: require("../Imagens/flor.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/menuflor.jpg"),
        },
        {
          id: 2,
          nome: "Restaurante Divino Casarão",
          descricao: "Hamburgueres artesanais e lanches em geral",
          endereco: "R. Cônego Cristóvão, 447 ",
          imagem: require("../Imagens/divino.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/menudivino.png"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Engenho Goiamunduba - Cachaça Rainha",
          descricao: "Visão linda da cidade e a capela é linda",
          endereco: " Estr. de goiamunduba",
          imagem: require("../Imagens/cachaca.jpg"),
          classificacao: 4.6,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Cachoeira do Roncador",
          descricao: "Cachoeira natural da cidade",
          endereco: "Maia, Bananeiras",
          imagem: require("../Imagens/Cachoeira.jpg"),
          classificacao: 4.5,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Serra Golfe Hotel",
          descricao: "Serra Golfe Hotel",
          endereco: "Praça Coronel Antonio Pessoa 414",
          imagem: require("../Imagens/serra.jpg"),
          classificacao: 5,
        },
        {
          id: 2,
          nome: "Pousada da Estação",
          descricao: "Bela vista para o centro da cidade",
          endereco: "Rua Alcides Bezerra 160 Centro",
          imagem: require("../Imagens/estacao.jpg"),
          classificacao: 4.6,
        },
      ],
    },
    {
      titulo: "Matureia",
      descricao: "Cidade da Pedra do Caboclo.",
      localizacao: { latitude: -7.2651338, longitude: -37.3426697 },
      restaurante: [
        {
          id: 1,
          nome: "Art Popular",
          descricao: "O melhor da comida chinesa, regional e Sushi da região",
          endereco: "R. Dagmar da Fonseca, 86",
          imagem: require("../Imagens/art.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/artmenu.jpg"),
        },
        {
          id: 2,
          nome: "Restaurante Bom Sabor de Madureira",
          descricao: "Hamburgueres artesanais e lanches em geral",
          endereco: "R. Dagmar da Fonseca, 111",
          imagem: require("../Imagens/bomsabor.jpg"),
          classificacao: 4.3,
          menu: require("../Imagens/bommenu.jpg"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Pedra do Tendó - Teixeira",
          descricao: "Visão linda da cidade e a capela é linda",
          endereco: "Teixeira, Paraiba",
          imagem: require("../Imagens/pedra.jpg"),
          classificacao: 4.6,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Museu Agar Nunes Guedes - Teixeira",
          descricao: "Festa de São João",
          endereco: "E. Manoel Rodrigues de Oliveira",
          imagem: require("../Imagens/museu.jpg"),
          classificacao: 4.5,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Ecopousada Pico do Jabre",
          descricao: "Pousada no centro da cidade",
          endereco: "Estrada de acesso ao jabre km 4,5 zona rural",
          imagem: require("../Imagens/eco.webp"),
          classificacao: 4.4,
        },
        {
          id: 2,
          nome: "Pousada Recanto do Jabre",
          descricao: "Bela vista para o centro da cidade",
          endereco: "Maurílio Dantas Wanderley, Maturéia",
          imagem: require("../Imagens/jabre.webp"),
          classificacao: 3.6,
        },
      ],
    },
    {
      titulo: "Patos",
      descricao: "Cidade da Menor Capelinha do Mundo.",
      localizacao: { latitude: -7.02556, longitude: -37.2779 },
      imagensdaCidade: "capela-esperanca.webp",
      restaurante: [
        {
          id: 1,
          nome: "Seu Bastião Restaurante",
          descricao: "O melhor da comida chinesa, regional e Sushi da região",
          endereco: " R. Leôncio Wanderley, 33",
          imagem: require("../Imagens/bastiao.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/menubastiao.jpg"),
        },
        {
          id: 2,
          nome: "Bobs Burgers",
          descricao: "Hamburgueres artesanais e lanches em geral",
          endereco: "Praça Getúlio Vargas, 25",
          imagem: require("../Imagens/bobs.jpg"),
          classificacao: 4.3,
          menu: require("../Imagens/menubobs.jpg"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Catedral Nossa Senhora Da Guia",
          descricao: "Igreja católica",
          endereco: "Igreja católica em Patos",
          imagem: require("../Imagens/catedral.jpg"),
          classificacao: 4.8,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Fazenda Verdes Pastos",
          descricao: "Reserva nacional na Paraíba",
          endereco: "Reserva, São Mamede",
          imagem: require("../Imagens/fazenda.jpg"),
          classificacao: 4.9,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Pousada Ideal",
          descricao: "Pousada no centro da cidade",
          endereco: "R. José Gomes Alves, 20",
          imagem: require("../Imagens/ideal.jpg"),
          classificacao: 3.6,
        },
        {
          id: 2,
          nome: "Pousada Patoense",
          descricao: "Bela vista para o centro da cidade",
          endereco: "Rua Progetada, S/N - Novo Horizonte",
          imagem: require("../Imagens/patoense.jpg"),
          classificacao: 3.6,
        },
      ],
    },
    {
      titulo: "João Pessoa",
      descricao: "Cidade da Menor Capelinha do Mundo.",
      localizacao: { latitude: -7.11532, longitude: -34.861 },
      imagensdaCidade: "capela-esperanca.webp",
      restaurante: [
        {
          id: 1,
          nome: "NAU Frutos do Mar",
          descricao:
            "Culinária contemporânea de frutos do mar, além de carnes e sobremesas, em ambiente requintado de ar intimista",
          endereco: "R. Lupércio Branco, 130 - Manaíra",
          imagem: require("../Imagens/nau.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/naumenu.jpg"),
        },
        {
          id: 2,
          nome: "The W Restaurante",
          descricao:
            "Espaço sofisticado com terraço de frente para o mar que serve pratos refinados de frutos do mar, peixes e carnes",
          endereco: "Av. João Maurício, 451 - Manaíra",
          imagem: require("../Imagens/w.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/wmenu.jpg"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Parque da Lagoa - Solon de Lucena",
          descricao: "Parque municipal em João Pessoa",
          endereco: "Parque Sólon de Lucena - Centro",
          imagem: require("../Imagens/solon.jpg"),
          classificacao: 4.8,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Estação Cabo Branco - Ciência, Cultura e Artes",
          descricao: "Centro cultural em João Pessoa",
          endereco: "Avenida João Cirillo da Silva - Altiplano Cabo Branco",
          imagem: require("../Imagens/ciencia.jpg"),
          classificacao: 4.3,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Guest Manaíra Apart Hotel",
          descricao: "Hotel sofisticado em uma construção com fachada de vidro",
          endereco: "R. Juvenal Mário da Silva, 1108 - Manaíra",
          imagem: require("../Imagens/apart.jpg"),
          classificacao: 4.4,
        },
        {
          id: 2,
          nome: "Hotel Manaíra",
          descricao: "Uma área animada repleta de lojas e bares",
          endereco: "Av. Gen. Edson Ramalho, 1131 - Manaíra",
          imagem: require("../Imagens/manaira.jpg"),
          classificacao: 4.7,
        },
      ],
    },
    {
      titulo: "Pombal",
      descricao: "Cidade da Menor Capelinha do Mundo.",
      localizacao: { latitude: -6.76885, longitude: -37.7957 },
      imagensdaCidade: "capela-esperanca.webp",
      restaurante: [
        {
          id: 1,
          nome: "Waynios gourmet restaurante",
          descricao: "Restaurante italiano",
          endereco: "R. Sebastião Queiroga de Alençar, 577 ",
          imagem: require("../Imagens/wa.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/wamenu.jpg"),
        },
        {
          id: 2,
          nome: "João do Bar",
          descricao: "Hamburgueres artesanais e lanches em geral",
          endereco: "R. José Rufino, 72-250 - Centro",
          imagem: require("../Imagens/bar.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/barmenu.jpg"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Igreja Matriz",
          descricao: "Igreja mais antiga da cidade",
          endereco: "Praça Getúlio Vargas",
          imagem: require("../Imagens/igreja.jpg"),
          classificacao: 4.8,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Praça Centenária",
          descricao: "Local que ocorre a Pombal Fest",
          endereco: "Praça Centenária",
          imagem: require("../Imagens/praca.jpg"),
          classificacao: 4.5,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Pousada Sonho Azul",
          descricao: "Pousada no centro da cidade",
          endereco: "av Br-230 450 Prédio",
          imagem: require("../Imagens/azul.jpg"),
          classificacao: 4.3,
        },
        {
          id: 2,
          nome: "Hotel Rio Verde Ltda",
          descricao: "Bela vista para o centro da cidade",
          endereco: "R. Odilon Lopes, 262 - Centro",
          imagem: require("../Imagens/verde.jpg"),
          classificacao: 3.9,
        },
      ],
    },
    {
      titulo: "Cajazeiras",
      descricao: "Principal cidade da região do Alto Piranhas",
      localizacao: { latitude: -6.88634, longitude: -38.5614 },
      imagensdaCidade: "capela-esperanca.webp",
      restaurante: [
        {
          id: 1,
          nome: "Mansão - Restaurante & Petiscaria",
          descricao:
            "Pratos variados, incluindo pizzas, massas e carnes, em restaurante com salão aconchegante e mesas externas.",
          endereco: "R. Mário Sobreira Cartaxo, 40 - Lot. Jardim Oasis",
          imagem: require("../Imagens/mansao.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/mansaomenu.jpg"),
        },
        {
          id: 2,
          nome: "Restaurante Panela de Barro",
          descricao:
            "Pratos brasileiros, hortaliças e carnes grelhadas, mais sobremesas, em espaço rústico, aconchegante e natural.",
          endereco: "Av. Júlio Marquês Nascimento, 100",
          imagem: require("../Imagens/panela.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/panelamenu.jpg"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "O teatro Íracles Pires ",
          descricao: "Uma das principais casas de espetáculos da Paraíba",
          endereco: "R. Líbio Brasileiro, 87 - Centro",
          imagem: require("../Imagens/teatro.jpeg"),
          classificacao: 4.8,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Cristo Redentor",
          descricao: "Atração turística em Cajazeiras",
          endereco: "Morro do Cristo Redentor",
          imagem: require("../Imagens/cristo.jpg"),
          classificacao: 4.5,
          roteiro:
            "Programação do São João 2023 de Esperança \n \n 25 de junho (domingo): \n\n Fabiana Souto, \n Matheus Felipe \n Mara Pavanelly,\n Edilson \n \n 26 de junho (segunda-feira) \n \n Alceu Valença \n Zezo Potiguar \n Alexandre Tan \n Junior DLima \n \n 27 de junho (terça-feira) \n \n Taty Girl \n Fabiano Guimarães \n Forró Feitiço \n Joabson Moreno e Emmanuele Santos \n \n 28 de junho (quarta-feira) \n\n Zé Ramalho \n GG Bismarck \n Banda Palov \n Jonas Souza \n\n 29 de junho (quinta-feira) \n\n Pablo \n Capilé \n Banda Encantus \n Dean Oliveira \n\n 30 de junho (sexta-feira) \n\n Cavaleiros do Forró \n Forrozão Karkará \n Donas da Farra \n Jefferson Arretado \n\n 1º de julho (sábado) \n \n Japaõzin \n Thaíse Porto \n Joyce Tayná \n Fixação \n Yngrid Ellen",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Hotel Nossa Senhora de Fátima",
          descricao: "Pousada no centro da cidade",
          endereco: "Rod. Br 230 km 510 Fátima santos",
          imagem: require("../Imagens/nossa.webp"),
          classificacao: 4.4,
        },
        {
          id: 2,
          nome: "Cajazeiras Comfort Hotel",
          descricao: "Bela vista para o centro da cidade",
          endereco: "Av. Pedro Moreno Gondim, 1.040",
          imagem: require("../Imagens/comfort.png"),
          classificacao: 3.6,
        },
      ],
    },
    {
      titulo: "Monteiro",
      descricao: "Cidade da Menor Capelinha do Mundo.",
      localizacao: { latitude: -7.8915, longitude: -37.1169 },
      imagensdaCidade: "capela-esperanca.webp",
      restaurante: [
        {
          id: 1,
          nome: "Churrascaria Cariri",
          descricao: "Churrascaria",
          endereco: "BR-412, 447, Monteiro",
          imagem: require("../Imagens/cariri.jpg"),
          classificacao: 4.7,
          menu: require("../Imagens/caririmenu.jpg"),
        },
        {
          id: 2,
          nome: "Saborear Café",
          descricao: "Restaurante bem sofisticado",
          endereco: "Av. Olimpio Gomes, 20, Monteiro",
          imagem: require("../Imagens/cafe.jpg"),
          classificacao: 4.6,
          menu: require("../Imagens/cafemenu.jpg"),
        },
      ],
      passeios: [
        {
          id: 1,
          nome: "Museu Histórico de Monteiro",
          descricao: "Museu em Monteiro, Paraíba",
          endereco: "R. Alcindo B Menezes, 13",
          imagem: require("../Imagens/museum.jpg"),
          classificacao: 4.8,
          roteiro:
            "Aberto todas as terças \n \n Parada na praça da cultura \n \n Ir para rua da Beleza dos Campos \n \n Terço na Capelinha das pedras \n \n Por do Sol no chafaris da capelinha das Pedras",
        },
        {
          id: 2,
          nome: "Rota Cariri Cultural ",
          descricao:
            "Evento de passeio ecologico promovido pela prefeitura de Monteiro",
          endereco: "Praça João Pessoa",
          imagem: require("../Imagens/rota.jpeg"),
          classificacao: 4.5,
          roteiro:
            "O evento contará com a participação de turistas e visitantes que irão percorrer parte das belezas naturais e dos pontos de turismo religioso, localizados na zona rural do município, como o Santuário Nossa Senhora de Fátima e as formações rochosas da Laje das Moças, fazendo parte de um leque de belíssimos cenários disponíveis para visitação no município.",
        },
      ],
      pousadas: [
        {
          id: 1,
          nome: "Pousada Seu Tião",
          descricao: "Pousada no centro da cidade",
          endereco: "Avenida Cidade do Recife, 2471",
          imagem: require("../Imagens/tiao.jpg"),
          classificacao: 4.4,
        },
        {
          id: 2,
          nome: "Pousada dos Poemas",
          descricao: "Bela vista para o centro da cidade",
          endereco: "Rua Poeta Jansen Filho, 767 - Centro",
          imagem: require("../Imagens/poemas.jpg"),
          classificacao: 3.6,
        },
      ],
    },
  ],
};

export default marcadores;
