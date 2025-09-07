import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Network, Wifi, Globe, Users, Server, Router, Cable, Shield } from 'lucide-react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const networkTypes = [
    {
      name: 'LAN',
      fullName: 'Local Area Network',
      description: 'Rede que conecta dispositivos em uma área limitada, como uma casa ou escritório.',
      icon: <Wifi className="w-8 h-8" />,
      color: 'bg-blue-500'
    },
    {
      name: 'MAN',
      fullName: 'Metropolitan Area Network',
      description: 'Rede que abrange uma cidade ou área metropolitana.',
      icon: <Network className="w-8 h-8" />,
      color: 'bg-green-500'
    },
    {
      name: 'WAN',
      fullName: 'Wide Area Network',
      description: 'Rede que abrange uma vasta área geográfica, como países ou continentes.',
      icon: <Globe className="w-8 h-8" />,
      color: 'bg-purple-500'
    },
    {
      name: 'PAN',
      fullName: 'Personal Area Network',
      description: 'Rede pessoal que conecta dispositivos próximos a uma pessoa.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-orange-500'
    }
  ]

  const topologies = [
    {
      name: 'Barramento',
      description: 'Todos os dispositivos conectados a um único cabo central.',
      advantages: ['Baixo custo', 'Fácil instalação'],
      disadvantages: ['Falha no cabo paralisa a rede', 'Difícil isolamento de problemas'],
      icon: <Cable className="w-8 h-8" />
    },
    {
      name: 'Estrela',
      description: 'Todos os dispositivos conectados a um ponto central (hub/switch).',
      advantages: ['Fácil gerenciamento', 'Falha individual não afeta a rede'],
      disadvantages: ['Falha no centro paralisa tudo', 'Mais cabos necessários'],
      icon: <Network className="w-8 h-8" />
    },
    {
      name: 'Anel',
      description: 'Dispositivos conectados em um loop fechado.',
      advantages: ['Desempenho consistente', 'Fácil controle de acesso'],
      disadvantages: ['Falha em um ponto afeta toda a rede', 'Difícil expansão'],
      icon: <Router className="w-8 h-8" />
    },
    {
      name: 'Malha',
      description: 'Cada dispositivo conectado a todos os outros.',
      advantages: ['Alta redundância', 'Muito robusta'],
      disadvantages: ['Muito cara', 'Complexa de gerenciar'],
      icon: <Shield className="w-8 h-8" />
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Network className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-800">Fundamentos de Redes</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Button 
                variant={activeSection === 'home' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('home')}
              >
                Início
              </Button>
              <Button 
                variant={activeSection === 'concepts' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('concepts')}
              >
                Conceitos
              </Button>
              <Button 
                variant={activeSection === 'types' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('types')}
              >
                Tipos de Redes
              </Button>
              <Button 
                variant={activeSection === 'topologies' ? 'default' : 'ghost'}
                onClick={() => setActiveSection('topologies')}
              >
                Topologias
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'home' && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Bem-vindo ao Mundo das Redes de Computadores
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Explore os conceitos fundamentais, tipos de redes e topologias que formam a base da comunicação digital moderna.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('concepts')}>
                <CardHeader className="text-center">
                  <Server className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Conceitos Fundamentais</CardTitle>
                  <CardDescription>
                    Entenda o que são redes de computadores e seus componentes básicos
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('types')}>
                <CardHeader className="text-center">
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Tipos de Redes</CardTitle>
                  <CardDescription>
                    Conheça as diferentes classificações de redes por abrangência
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setActiveSection('topologies')}>
                <CardHeader className="text-center">
                  <Network className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Topologias</CardTitle>
                  <CardDescription>
                    Descubra as diferentes formas de conectar dispositivos em rede
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'concepts' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Conceitos Fundamentais de Redes</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Network className="w-6 h-6 text-blue-600" />
                    <span>O que é uma Rede de Computadores?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Uma rede de computadores é um conjunto de dispositivos interconectados que podem 
                    compartilhar recursos e informações entre si. Esses dispositivos podem incluir 
                    computadores, servidores, impressoras, smartphones e outros equipamentos de rede.
                  </p>
                  <p className="text-gray-600">
                    A interconexão pode ser realizada por meio de cabos (redes com fio) ou por 
                    ondas de rádio (redes sem fio).
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Server className="w-6 h-6 text-green-600" />
                    <span>Componentes Básicos</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <Badge variant="outline" className="mb-2">Hardware</Badge>
                      <p className="text-sm text-gray-600">
                        Servidores, estações de trabalho, dispositivos de conexão (hubs, switches, roteadores), 
                        placas de rede e meios de transmissão.
                      </p>
                    </div>
                    <div>
                      <Badge variant="outline" className="mb-2">Software</Badge>
                      <p className="text-sm text-gray-600">
                        Sistemas operacionais de rede, protocolos de comunicação (TCP/IP) e 
                        aplicativos de rede.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="w-6 h-6 text-purple-600" />
                  <span>Finalidades das Redes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Compartilhamento de Recursos</h4>
                    <p className="text-sm text-gray-600">Hardware e software compartilhados</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Network className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Troca de Informações</h4>
                    <p className="text-sm text-gray-600">Dados e documentos em tempo real</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Wifi className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Comunicação</h4>
                    <p className="text-sm text-gray-600">E-mail, mensagens e videoconferências</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Globe className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <h4 className="font-semibold">Acesso à Internet</h4>
                    <p className="text-sm text-gray-600">Conexão com a rede mundial</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'types' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Tipos de Redes de Computadores</h2>
            <p className="text-lg text-gray-600 mb-8">
              As redes podem ser classificadas por sua abrangência geográfica:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {networkTypes.map((network, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-full ${network.color} text-white`}>
                        {network.icon}
                      </div>
                      <div>
                        <CardTitle>{network.name}</CardTitle>
                        <CardDescription className="font-medium">{network.fullName}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{network.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Classificação por Arquitetura</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="client-server" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="client-server">Cliente-Servidor</TabsTrigger>
                    <TabsTrigger value="peer-to-peer">Ponto a Ponto (P2P)</TabsTrigger>
                  </TabsList>
                  <TabsContent value="client-server" className="mt-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Rede Cliente-Servidor</h4>
                      <p className="text-gray-600">
                        Existem computadores designados como servidores que fornecem serviços e recursos 
                        para outros computadores (clientes). Os clientes solicitam os serviços, e os 
                        servidores os atendem. Comum em ambientes corporativos.
                      </p>
                    </div>
                  </TabsContent>
                  <TabsContent value="peer-to-peer" className="mt-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Rede Ponto a Ponto (P2P)</h4>
                      <p className="text-gray-600">
                        Todos os computadores têm capacidades semelhantes. Cada dispositivo pode atuar 
                        como cliente e servidor, compartilhando recursos diretamente, sem servidor central. 
                        Comum em redes menores e aplicações de compartilhamento.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'topologies' && (
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Topologias de Rede</h2>
            <p className="text-lg text-gray-600 mb-8">
              A topologia refere-se à forma como os dispositivos estão conectados na rede:
            </p>
            <div className="grid lg:grid-cols-2 gap-6">
              {topologies.map((topology, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-full bg-indigo-500 text-white">
                        {topology.icon}
                      </div>
                      <CardTitle>{topology.name}</CardTitle>
                    </div>
                    <CardDescription>{topology.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-2">Vantagens:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {topology.advantages.map((advantage, i) => (
                            <li key={i}>{advantage}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-2">Desvantagens:</h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {topology.disadvantages.map((disadvantage, i) => (
                            <li key={i}>{disadvantage}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Network className="w-6 h-6" />
            <span className="text-lg font-semibold">Fundamentos de Redes de Computadores</span>
          </div>
          <p className="text-gray-400 mb-2">
            Projeto desenvolvido por Raylander Silva de Sousa
          </p>
          <p className="text-gray-500 text-sm">
            Material educativo sobre conceitos, tipos de redes e topologias
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

