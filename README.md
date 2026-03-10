# Adote um Amigo 🐾

Plataforma de adoção responsável de animais domésticos desenvolvida com HTML, CSS e JavaScript puro. Um site moderno com animações fluidas, filtros dinâmicos, modal de detalhes e sistema de contato integrado.

## 📋 Visão Geral

**Adote um Amigo** é uma aplicação web que facilita o encontro entre pessoas interessadas em adoção e animais que precisam de um lar. O projeto foi construído com foco em experiência do usuário, acessibilidade e performance.

## 🎯 Funcionalidades Principais

- **Catálogo de Animais**: Grid responsivo com cards de cães e gatos
- **Sistema de Filtros**: Filtro avançado por espécie, idade, tamanho e localização
- **Modal Detalhes**: Visualização completa das informações do animal
- **Slider de Depoimentos**: Carrossel de avaliações de adotantes
- **Formulário de Contato**: Sistema de validação com animação de envio
- **Menu Mobile**: Navegação responsiva para dispositivos pequenos
- **Animações Suaves**: Transições e efeitos visuais em toda a plataforma
- **Lazy Loading**: Carregamento otimizado de imagens
- **Scroll Reveal**: Elementos aparecem conforme o usuário rola a página

## 🏗️ Estrutura do Projeto

```
adote-um-amigo/
├── index.html          # Estrutura HTML da aplicação
├── style.css           # Estilos e animações CSS
├── script.js           # Lógica JavaScript
└── README.md           # Documentação
```

## 🔧 Tecnologias Utilizadas

- **HTML**: Semântica e estrutura
- **CSS**: Flexbox, Grid, Animations, Tailwind CSS
- **JavaScript**: Classes, Arrow Functions, Template Literals
- **Font Awesome**: Ícones vetoriais
- **Google Fonts**: Tipografia (Outfit, Plus Jakarta Sans)
- **Unsplash & Freepik**: Imagens de qualidade

## 📚 Documentação das Funções

### JavaScript (script.js)

#### **Dados Globais**

```javascript
const animals = [...]
const testimonials = [...]
const locationLabels = {...}
const ageLabels = {...}
const sizeLabels = {...}
const speciesLabels = {...}
```

Conjuntos de dados estáticos contendo informações sobre animais disponíveis para adoção, depoimentos de adotantes e mapeamentos de labels para exibição em português.

---

#### **DOM Elements**

```javascript
const animalsGrid = document.getElementById('animals-grid');
const noResults = document.getElementById('no-results');
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const contactForm = document.getElementById('contact-form');
const testimonialsTrack = document.getElementById('testimonials-track');
const testimonialPrev = document.getElementById('testimonial-prev');
const testimonialNext = document.getElementById('testimonial-next');
const testimonialDots = document.getElementById('testimonial-dots');
```

Referências aos elementos principais do DOM para manipulação posterior. Centraliza o acesso aos elementos sem repetição de `querySelector`.

---

#### **renderAnimals(list = animals)**

Renderiza o grid de cards dos animais dinamicamente no HTML.

**Parâmetros:**
- `list` (Array): Lista de animais a renderizar (padrão: array `animals`)

**Funcionamento:**
1. Limpa o grid anterior
2. Verifica se há resultados (exibe "sem resultados" se vazio)
3. Para cada animal, cria um `<article>` com imagem, nome, idade, tamanho e localização
4. Adiciona delay de animação escalonada (stagger effect)
5. Chama `observeReveal()` para ativar animações de scroll

**Exemplo:**
```javascript
renderAnimals(); // Renderiza todos os animais
renderAnimals(filteredList); // Renderiza apenas os filtrados
```

---

#### **openAnimalModal(animalId)**

Abre um modal com os detalhes completos de um animal específico.

**Parâmetros:**
- `animalId` (Number): ID do animal a exibir

**Funcionamento:**
1. Encontra o animal no array pelo ID
2. Popula o modal com informações detalhadas
3. Exibe ícones e labels para cada atributo (espécie, idade, peso, gênero, etc.)
4. Remove a classe `hidden` do modal para exibir
5. Adiciona event listeners para fechar o modal

**Dados Exibidos:**
- Imagem do animal
- Nome e características (espécie, idade, peso, gênero, tamanho, localização)
- Temperamento e descrição
- Botão "Quero adotar" com link para formulário de contato

---

#### **closeAnimalModal()**

Fecha o modal de detalhes adicionando a classe `hidden`.

---

#### **initAnimalModalListeners()**

Inicializa os event listeners para abertura e fechamento do modal.

**Funcionamento:**
1. Adiciona listeners ao botão de fechar e overlay
2. Adiciona listeners a todos os botões "Ver detalhes"
3. Trata clique no overlay para fechamento

---

#### **initFilterChips()**

Inicializa o sistema de filtros dinâmicos com chips clicáveis.

**Funcionamento:**
1. Carrega filtros padrão (todas as espécies, idades, tamanhos, localizações)
2. Cria elementos visuais (chips) para cada filtro
3. Adiciona event listeners para alternar estado ativo/inativo
4. Aplica filtros ao grid de animais em tempo real

**Filtros Disponíveis:**
- Espécie (cachorro, gato)
- Idade (filhote, adulto, idoso)
- Tamanho (pequeno, médio, grande)
- Localização (São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba)

**Lógica de Filtro:**
- Múltiplos filtros funcionam com lógica AND (animal deve atender a TODOS)
- Nenhum filtro ativo = mostra todos os animais

---

#### **initMobileMenu()**

Gerencia o menu mobile responsivo.

**Funcionamento:**
1. Toggle do menu ao clicar no botão hambúrguer
2. Alterna ícones (aberto/fechado)
3. Fecha menu ao clicar em links internos
4. Mantém estado sincronizado

---

#### **buildTestimonials()**

Constrói o slider de depoimentos dinamicamente.

**Funcionamento:**
1. Cria slides para cada depoimento
2. Exibe foto, nome e texto do depoente
3. Configura o track para 400% de largura (4 slides)
4. Cria indicadores visuais (dots) para cada slide

---

#### **goToSlide(n)**

Navega para um slide específico do carrossel de depoimentos.

**Parâmetros:**
- `n` (Number): Índice do slide

**Funcionamento:**
1. Valida o índice (mantém dentro dos limites)
2. Calcula a posição de transformação (translateX)
3. Atualiza o DOM do track com transição suave
4. Atualiza os indicadores de dots como ativos

---

#### **observeReveal()**

Implementa o efeito "scroll reveal" usando Intersection Observer.

**Funcionamento:**
1. Cria observer com threshold de 10% de visibilidade
2. Observa todos elementos com classe `.scroll-reveal`
3. Quando elemento entra na viewport, adiciona classe `.revealed`
4. Ativa animação CSS suave (fade + slide)

---

#### **validateForm()**

Valida os campos do formulário de contato.

**Validações Realizadas:**
- Nome: não pode estar vazio
- Email: não pode estar vazio + validação de formato
- Mensagem: não pode estar vazia

**Funcionamento:**
1. Limpa erros anteriores
2. Verifica cada campo
3. Exibe mensagens de erro personalizadas
4. Retorna `true` se válido, `false` caso contrário

**Feedback Visual:**
- Borda vermelha no campo com erro
- Mensagem de erro abaixo do input
- Erro desaparece ao começar a digitar

---

#### **Contact Form Submit Handler**

Gerencia o envio do formulário de contato com animação.

**Funcionamento:**
1. Previne comportamento padrão do formulário
2. Valida dados
3. Anima botão com spinner ("Enviando...")
4. Aguarda 1.2 segundos (simulando envio)
5. Reseta o formulário
6. Exibe notificação de sucesso no canto superior direito
7. Notificação desaparece automaticamente após 5 segundos
8. Restaura estado do botão

**Animações:**
- Spinner de carregamento no botão
- Notificação com fade-in/fade-out
- Ícone de verificação verde

---

#### **initLazyLoad()**

Implementa carregamento otimizado de imagens usando Intersection Observer.

**Funcionamento:**
1. Cria observer com margin de 100px
2. Observa todas as imagens com `loading="lazy"`
3. Quando imagem está próxima da viewport, carrega seu src real
4. Remove atributo `data-src` após carregamento

**Benefícios:**
- Reduz requisições iniciais
- Melhora performance e LCP
- Carrega imagens conforme necessidade

---

#### **init()**

Função de inicialização que executa todas as funções de setup na ordem correta.

**Ordem de Execução:**
1. Renderiza animais
2. Inicializa filtros
3. Inicializa menu mobile
4. Inicializa slider de depoimentos
5. Inicializa modal listeners
6. Inicializa scroll reveal
7. Inicializa lazy loading

---

### CSS (style.css)

#### **Animações Principais**

```css
@keyframes scaleIn
```
Escala a imagem hero de 1.1 para 1.0 ao longo de 8 segundos, criando efeito parallax sutil.

```css
@keyframes heroFadeIn
```
Fade in escalonado para elementos do hero (título, subtitle, botão) com delays de 0.2s, 0.4s, 0.6s.

```css
@keyframes fadeIn / fadeOut
```
Animações gerais de entrada/saída usadas nas notificações de sucesso do formulário.

```css
@keyframes shimmer
```
Efeito de carregamento (skeleton screen) em imagens antes delas carregarem.

```css
@keyframes modalSlideIn
```
Escala + fade do modal de detalhes do animal.

---

#### **Classes Principais**

**`.scroll-reveal`**
- Elementos que animam conforme scrollam
- Opacity 0 e translateY 40px inicialmente
- Ao entrar na viewport, recebem classe `.revealed`

**`.animal-card`**
- Cards do grid de animais
- Hover: sobe 8px e aumenta sombra
- Imagem faz zoom 1.05x ao hover

**`.filter-chip`**
- Elementos de filtro clicáveis
- Estado `.active` com fundo verde e texto branco
- Transições suaves entre estados

**`.form-input`**
- Inputs do formulário
- Estado `.error` com borda vermelha
- Focus com ring verde

---

#### **Responsividade**

Breakpoints principais:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Especificidades:
- Grid de animais: 1 coluna → 2 → 3 colunas
- Modal: padding adaptado
- Slider de depoimentos: largura e padding responsivos

---

#### **Acessibilidade**

- `focus-visible` com outline verde em links e botões
- `prefers-reduced-motion` desativa animações para usuários sensíveis
- Contraste de cores adequado (WCAG AA)
- Textos alternativos em imagens
- Semântica HTML correta

---

## 🚀 Como Usar

### Instalação

Não há dependências externas. Simplesmente clone o repositório ou baixe os arquivos:

```bash
git clone https://github.com/seu-usuario/adote-um-amigo.git
cd adote-um-amigo
```

### Abrir Localmente

1. Abra o arquivo `index.html` no navegador
2. Ou use um servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (com http-server)
npx http-server

# PHP
php -S localhost:8000
```

Acesse `http://localhost:8000` no navegador.

---

## 📦 Estrutura de Dados

### Objeto Animal

```javascript
{
  id: 1,
  name: 'Thor',
  species: 'cachorro',           // 'cachorro' ou 'gato'
  age: 'adulto',                 // 'filhote', 'adulto', 'idoso'
  size: 'grande',                // 'pequeno', 'medio', 'grande'
  location: 'sao-paulo',
  image: 'https://...',
  weight: '28 kg',
  gender: 'Macho',               // 'Macho' ou 'Fêmea'
  temperament: 'Carinhoso e calmo',
  description: 'Thor é um cachorro muito dócil...'
}
```

### Objeto Depoimento

```javascript
{
  name: 'Ana Silva',
  text: 'Adotamos a Luna há um ano...',
  image: 'https://...'
}
```

---

## 🎨 Paleta de Cores

Usando Tailwind CSS, as cores principais são:

- **Primary (Verde)**: `#22c55e` - CTA principal, botões, destaque
- **Accent (Laranja)**: `#f97316` - CTAs secundárias, destaques
- **Sky (Azul)**: `#0ea5e9` - Fundos alternativos
- **Cinza**: Textos, borders, backgrounds neutros

---

## ⚡ Performance

### Otimizações Implementadas

- Lazy loading de imagens
- Intersection Observer (scroll reveal, lazy load)
- CSS animations em vez de JavaScript
- Event delegation onde possível
- Minificação de CSS (manualmente)
- Uso de IIFE para escopo local

### Métricas Esperadas

- **Lighthouse Performance**: 85+
- **First Contentful Paint (FCP)**: < 1.5s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

---

## 🔒 Validação e Segurança

### Validação de Formulário

- Email: regex `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Campos obrigatórios: verificação de `.trim()`
- Prevenção de XSS: `textContent` em vez de `innerHTML` para dados do usuário

### Acessibilidade

- Textos alternativos em todas as imagens
- Labels associadas aos inputs
- Atributo `aria-label` em botões iconográficos
- Semântica HTML (tags `<article>`, `<section>`, etc.)

---

## 🐛 Troubleshooting

### Modal não abre

Verifique se o elemento `#animal-modal` existe no HTML com a classe `hidden`.

### Filtros não funcionam

Certifique-se de que os atributos dos animais (`species`, `age`, `size`, `location`) correspondem aos valores dos filtros.

### Imagens não carregam

Verifique as URLs das imagens. Se offline, as imagens de Unsplash e Freepik não carregarão.

### Menu mobile travado

Limpe o cache do navegador e recarregue a página.

---

## 📱 Compatibilidade

| Navegador | Versão | Status |
|-----------|--------|--------|
| Chrome    | 90+    | ✅ Completa |
| Firefox   | 88+    | ✅ Completa |
| Safari    | 14+    | ✅ Completa |
| Edge      | 90+    | ✅ Completa |
| IE        | -      | ❌ Não suportado |

---

## 🔄 Fluxo de Usuário

1. **Entrada**: Usuário acessa homepage
2. **Exploração**: Vê hero section animado e scroll revela seções
3. **Busca**: Usa filtros para encontrar animal ideal
4. **Detalhes**: Clica em "Ver detalhes" para modal completo
5. **Ação**: Clica "Quero adotar" e scroll leva ao formulário
6. **Contato**: Preenche formulário e recebe confirmação animada
7. **Prova Social**: Lê depoimentos de outros adotantes

---

## 🤝 Contribuindo

Para melhorias no projeto:

1. Faça fork do repositório
2. Crie branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 👨‍💻 Autor

<p><strong>Yan Kenny</strong></p>

**Contato & Links:**
- GitHub: [kennyangit](https://github.com/kennyangit)
- Portfolio: [https://kennyangit.github.io/newportfolio/](https://kennyangit.github.io/newportfolio/)
- LinkedIn: [yan-kenny](https://www.linkedin.com/in/yan-kenny/)

---

## 🙏 Agradecimentos

- **Unsplash** e **Freepik** pelas imagens
- **Font Awesome** pelos ícones
- **Tailwind CSS** pela framework CSS
- **Google Fonts** pela tipografia

---

**Feito com carinho para os amigos que precisam de um lar.**
