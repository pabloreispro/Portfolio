"use client"

import type React from "react"
import {
  Briefcase,
  Code,
  Database,
  GamepadIcon as GameController,
  Mail,
  User,
  Github,
  Download,
  BarChart,
  Menu,
  X,
} from "lucide-react"
import { PiWhatsappLogo } from "react-icons/pi"
import { FaLinkedin } from "react-icons/fa"
import Link from "next/link"
import { useState } from "react"
import PageClient from "./page-client"
import ThemeToggle from "./theme-toggle"
import ContactForm from "./components/contact-form"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Project data with unique links for each project
  const projects = [
    {
      title: "Master Witch",
      category: "Desenvolvimento de Jogos",
      type: "game",
      image: "/MasterWitch.jpg?height=400&width=600",
      description:
        "Master Witch é um jogo multiplayer para 2 a 4 jogadores, onde bruxos competem para criar a melhor poção enquanto sabotam seus adversários.",
      icon: <GameController className="w-5 h-5" />,
      repoUrl: "https://github.com/pabloreispro/Master-Witch",
      downloadUrl: "https://master-witch.itch.io/master-witch"
    },
    {
      title: "Análise de Desempenho em Call Center",
      category: "Análise de Dados",
      type: "data",
      image: "/Case Pesquisa Call Center.png?height=400&width=600",
      description:
        "Análise detalhada dos dados de um Call Center, com visualizações interativas que destacam métricas-chave de desempenho, volume de chamadas, tempo médio de atendimento e satisfação dos clientes.",
      icon: <Database className="w-5 h-5" />,
      dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZTlmYjE1NzMtMjdlZC00NjZiLWIwNGMtNTVjMjVkZGMzNWJjIiwidCI6ImJkMjI3ZjE1LWQyZDItNDRhZi1iZTQ5LTZiZTdhYjY4ZjRhZCJ9",
    },
    {
      title: "Cowboy Samurai",
      category: "Desenvolvimento de Jogos",
      type: "game",
      image: "/CowboySamurai.png?height=400&width=600",
      description:
        "Cowboy Samurai é um RPG sidescroller que combina o melhor do Velho Oeste com a arte do combate samurai.",
      icon: <GameController className="w-5 h-5" />,
      repoUrl: "https://github.com/GameDevBydo/CowboySamurai",
      downloadUrl: "https://drive.google.com/uc?export=download&id=18CB8vTMidpeAT2xQWHlGZ2dTL88ZPYco"
    },
    {
      title: "Análise de Vendas em Varejista ",
      category: "Análise de Dados",
      type: "data",
      image: "/Case Vendas Varejista Multinacional .png?height=400&width=600",
      description:
        "O dashboard interativo apresenta insights sobre desempenho de produtos, comportamento do consumidor, sazonalidade e tendências de mercado, etc.",
      icon: <Database className="w-5 h-5" />,
      dashboardUrl: "https://app.powerbi.com/view?r=eyJrIjoiZjEzYzcxYTMtNzliNy00MWRjLThlMWQtOTAzMzM2YTE3M2EyIiwidCI6ImJkMjI3ZjE1LWQyZDItNDRhZi1iZTQ5LTZiZTdhYjY4ZjRhZCJ9",
    },
    {
      title: "Correndo nas Montanhas",
      category: "Desenvolvimento de Jogos",
      type: "game",
      image: "/CorrendoNasMontanhas.png?height=400&width=600",
      description:
        "Um jogo runner mobile desenvolvido na Unity com uma perspectiva 2.5D, meu primeiro grande projeto criado durante a faculdade.",
      icon: <GameController className="w-5 h-5" />,
      repoUrl: "https://github.com/pabloreispro/Correndo-nas-Montanhas",
      downloadUrl: "/Correndo nas Montanhas.apk"
    },
    {
      title: "School Simulator",
      category: "Desenvolvimento de Jogos",
      type: "game",
      image: "/SchoolSimulator.png?height=400&width=600",
      description:
        "School Simulator é um jogo de gerenciamento desenvolvido na Unity, onde você administra sua própria escola, tomando decisões para mantê-la funcionando e próspera.",
      icon: <GameController className="w-5 h-5" />,
      repoUrl: "https://github.com/LuisHenrique111/School-simulator",
      downloadUrl: "/SchoolSimulator.zip"
    },
    {
      title: "Capture the Flag - MiniGame",
      category: "Desenvolvimento de Jogos",
      type: "game",
      image: "/CaptureTheFlag.png?height=400&width=600",
      description:
        "Capture the Flag é um mini game criado na Unity, desenvolvido para testar o Netcode for GameObjects, onde os jogadores competem para capturar a bandeira do time adversário.",
      icon: <GameController className="w-5 h-5" />,
      repoUrl: "https://github.com/pabloreispro/Capture-The-Flag",
      downloadUrl: "/CaptureTheFlag.zip"
    },
    {
      title: "Air Hockey - MiniGame",
      category: "Desenvolvimento de Jogos",
      type: "game",
      image: "/AirHockey-MiniGame.png?height=400&width=600",
      description:
        "Air Hockey - MiniGame é um jogo competitivo local simples, desenvolvido na Unity, que simula as mesas de air hockey de shopping, proporcionando partidas rápidas e divertidas.",
      icon: <GameController className="w-5 h-5" />,
      repoUrl: "https://github.com/pabloreispro/AirHockey_MiniGame",
      downloadUrl: "/AirHockey-MiniGame.zip"
    },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const navItems = [
    { label: "Início", id: "home" },
    { label: "Sobre", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Projetos", id: "projects" },
    { label: "Contato", id: "contact" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <PageClient />

      {/* Improved Header/Navbar */}
      <header className="navbar sticky top-0 z-10 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm h-[var(--header-height)]">
        <div className="container mx-auto px-4 h-full flex justify-between items-center">
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">
            <span className="text-emerald-600 dark:text-emerald-400">Tech</span>Pablo
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map(({label, id}) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="nav-link text-slate-600 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
          <nav className="p-6">
            <ul className="space-y-6">
              {navItems.map(({label, id}) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="block text-lg font-medium text-slate-800 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="section-full px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-4">
              GameDev <span className="text-emerald-600 dark:text-emerald-400">&</span> Analista de Dados em Formação
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Criando jogos e explorando o mundo dos dados.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#projects"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors"
                >
                  Meus projetos
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 border border-slate-300 dark:border-slate-600 hover:border-emerald-600 dark:hover:border-emerald-400 text-slate-800 dark:text-white rounded-lg transition-colors"
                >
                  Me contatar
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                <img
                  src="/foto.jpg?height=320&width=320"
                  alt="Profile"
                  className="relative z-10 rounded-full border-4 border-white dark:border-slate-800 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="section-separator"></div>

        {/* About Section */}
        <section id="about" className="section-full px-4 pt-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <h2 className="section-title text-slate-800 dark:text-white">
              Sobre <span className="text-emerald-600 dark:text-emerald-400">Mim</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 md:w-72 md:h-72 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg transform rotate-3"></div>
                  <div className="absolute top-0 left-0 w-64 h-64 md:w-72 md:h-72 bg-slate-100 dark:bg-slate-700 rounded-lg transform -rotate-3 shadow-md">
                    <div className="p-6 h-full flex flex-col justify-center">
                      <User className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mb-4" />
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">Quem sou eu</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        Sou desenvolvedor de jogos e estou me aprofundando em análise de dados para criar experiências interativas mais inteligentes e envolventes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-justify">
                Desenvolvedor de Jogos e estudante de Jogos Digitais, com experiência prática em Desenvolvimento de Jogos, 3D e Desenvolvimento Web. 
                Ao longo da minha trajetória, atuei em equipes com profissionais altamente qualificados e desenvolvi projetos diversos, tanto acadêmicos quanto independentes.
                </p>
                <p className="text-slate-600 dark:text-slate-300 mb-6 text-justify">
                Tenho sólida experiência em liderança de equipes, gerenciamento de projetos e resolução de problemas técnicos, sempre buscando otimizar processos e entregar soluções de alto impacto. 
                Durante minha formação, desenvolvi diversos jogos e sites, aplicando Unreal Engine, Unity, C# e Blueprints.
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-justify">
                Atualmente, estou expandindo minhas habilidades para a área de Análise de Dados, onde busco aplicar meu raciocínio lógico e experiência em TI para extrair insights valiosos. 
                Tenho conhecimentos em Power BI, SQL e ETL e estou em busca de uma oportunidade para ingressar profissionalmente nesse setor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="section-separator"></div>

        {/* Skills Section */}
        <section id="skills" className="section-full px-4 pt-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto">
            <h2 className="section-title text-slate-800 dark:text-white">
              Minhas <span className="text-emerald-600 dark:text-emerald-400">Habilidades</span>
            </h2>
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Game Development Skills */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 hover-lift">
                  <div className="flex items-center mb-6">
                    <GameController className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Desenvolvimento de Jogos</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { name: "Unity", level: 85 },
                      { name: "Unreal Engine", level: 65 },
                      { name: "C#", level: 80 },
                      { name: "Blueprints", level: 65 },
                      { name: "Game Design", level: 75 },
                      { name: "Modelagem 3D", level: 60 },
                    ].map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 skill-bar">
                          <div
                            className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full skill-progress"
                            style={{ width: `${skill.level}%`, "--progress": `${skill.level}%` } as React.CSSProperties}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Data Analysis Skills */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-8 hover-lift">
                  <div className="flex items-center mb-6">
                    <Database className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mr-4" />
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-white">Análise de Dados</h3>
                  </div>
                  <ul className="space-y-4">
                    {[
                      { name: "Excel", level: 80 },
                      { name: "Power BI", level: 70 },
                      { name: "SQL", level: 70 },
                      { name: "ETL", level: 70 },
                      { name: "Visualização de Dados", level: 75 },
                    ].map((skill) => (
                      <li key={skill.name}>
                        <div className="flex justify-between mb-1">
                          <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                          <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 skill-bar">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full skill-progress"
                            style={{ width: `${skill.level}%`, "--progress": `${skill.level}%` } as React.CSSProperties}
                          ></div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Circular Progress - Soft Skills with Animation */}
              <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { name: "Resolução de Problemas", value: 85 },
                  { name: "Trabalho em Equipe", value: 90 },
                  { name: "Comunicação", value: 90 },
                  { name: "Proatividade", value: 80 },
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="progress-circle mx-auto animate">
                      <svg width="120" height="120" viewBox="0 0 120 120">
                        <circle
                          cx="60"
                          cy="60"
                          r="45"
                          stroke="#e2e8f0"
                          className="dark:stroke-slate-700"
                          strokeWidth="8"
                          fill="none"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="45"
                          stroke="#10b981"
                          className="progress dark:stroke-emerald-500"
                          strokeWidth="8"
                          fill="none"
                          strokeLinecap="round"
                          style={
                            {
                              "--dash-offset": `${283 - (283 * skill.value) / 100}`,
                            } as React.CSSProperties
                          }
                        />
                      </svg>
                      <div
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-slate-800 dark:text-white percentage-text"
                        data-percentage={`${skill.value}%`}
                      ></div>
                    </div>
                    <p className="mt-4 text-slate-700 dark:text-slate-300">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="section-separator"></div>

        {/* Projects Section */}
        <section id="projects" className="section-full px-4 pt-16 bg-white dark:bg-slate-800">
          <div className="container mx-auto">
            <h2 className="section-title text-slate-800 dark:text-white">
              Meus <span className="text-emerald-600 dark:text-emerald-400">Projetos</span>
            </h2>
            <div className="">
              <p className="text-center text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
                Uma seleção dos meus trabalhos recentes abrangendo projetos de desenvolvimento de jogos e análise de dados.
              </p>

              {/* Project Filter */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-700 rounded-lg">
                  <button
                    className="project-filter-btn px-4 py-2 rounded-md bg-white dark:bg-slate-600 shadow-sm text-slate-800 dark:text-white"
                    data-filter="all"
                  >
                    Todos
                  </button>
                  <button
                    className="project-filter-btn px-4 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
                    data-filter="game"
                  >
                    Jogos
                  </button>
                  <button
                    className="project-filter-btn px-4 py-2 rounded-md text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white"
                    data-filter="data"
                  >
                    Dados
                  </button>
                </div>
              </div>

              {/* Projects Grid - Limited to 9 projects */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, 9).map((project, index) => (
                  <div
                    key={index}
                    className="project-item bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden shadow-md"
                    data-category={project.type}
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute top-4 right-4 bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 p-2 rounded-full">
                        {project.icon}
                      </div>

                      {/* Overlay with project details and links (visible on hover) */}
                      <div className="project-overlay">
                        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-200 mb-4 text-sm">{project.description}</p>
                        <div className="project-buttons">
                          {project.type === "game" ? (
                            <>
                              <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-3 py-1.5 bg-slate-200 hover:bg-slate-300 rounded-md text-sm text-slate-800 transition-colors"
                              >
                                <Github className="w-4 h-4 mr-1.5" />
                                Visitar Repositório
                              </a>
                              <a
                                href={project.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="inline-flex items-center px-3 py-1.5 bg-emerald-500 hover:bg-emerald-600 rounded-md text-sm text-white transition-colors"
                              >
                                <Download className="w-4 h-4 mr-1.5" />
                                Baixar Jogo
                              </a>
                            </>
                          ) : (
                            <a
                              href={project.dashboardUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-3 py-1.5 bg-blue-500 hover:bg-blue-600 rounded-md text-sm text-white transition-colors"
                            >
                              <BarChart className="w-4 h-4 mr-1.5" />
                              Visitar Dashboard
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-emerald-600 dark:text-emerald-400 mb-1">{project.category}</div>
                      <h3 className="text-lg font-bold text-slate-800 dark:text-white">{project.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Separator */}
        <div className="section-separator"></div>

        {/* Contact Section */}
        <section id="contact" className="section-full px-4 pt-16 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto">
            <h2 className="section-title text-slate-800 dark:text-white">
              Entre em <span className="text-emerald-600 dark:text-emerald-400">Contato</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-6">Informações de Contato</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-8">
                  Entre em contato se tiver um projeto ou quiser trocar uma ideia!
                </p>
                <div className="space-y-6">
                  <div className="flex items-center hover-lift">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <a href="mailto:pabloreis.pro@gmail.com">
                      <h4 className="text-sm text-slate-500 dark:text-slate-400">Email</h4>
                      <p className="text-slate-800 dark:text-white">pabloreis.pro@gmail.com</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center hover-lift">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                      <FaLinkedin className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <a href="https://www.linkedin.com/messaging/compose/?recipient=pablo-henrique-reis">
                      <h4 className="text-sm text-slate-500 dark:text-slate-400">LinkedIn</h4>
                      <p className="text-slate-800 dark:text-white">linkedin.com/in/pablo-henrique-reis</p>
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center hover-lift">
                    <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center mr-4">
                      <PiWhatsappLogo className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <a href="https://api.whatsapp.com/send?phone=5531995321255">
                      <h4 className="text-sm text-slate-500 dark:text-slate-400">Whatsapp</h4>
                      <p className="text-slate-800 dark:text-white">Entrar em contato</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 py-4 px-4">
        <div className="container mx-auto">

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              <span className="text-emerald-600 dark:text-emerald-400">Tech</span>Pablo
            </h2>
            <span className="text-sm text-slate-600 dark:text-slate-300"></span>
            
            <div className="text-sm text-slate-500 dark:text-slate-400 border-l border-slate-200 dark:border-slate-700 pl-4">
              © {new Date().getFullYear()} - Pablo Reis
            </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/in/pablo-henrique-reis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg
                    xmlns=""
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/pabloreispro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/30 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

