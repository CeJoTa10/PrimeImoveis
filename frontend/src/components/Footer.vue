<script setup>
import { Home, Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-slate-900 border-t border-slate-800 text-slate-400 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <!-- Bloco 1: Sobre -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-white font-extrabold text-lg tracking-tight">
            <Home class="w-5 h-5 text-brand-500" />
            <span>Prime<span class="text-slate-300 font-medium">Imóveis</span></span>
          </div>
          <p class="text-xs leading-relaxed text-slate-400">
            A Prime Imóveis conecta você ao imóvel ideal com simplicidade, tecnologia e segurança. Oferecemos as melhores oportunidades de compra e locação de alto padrão.
          </p>
          <div class="flex items-center gap-3 pt-2">
            <a href="#" class="p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="#" class="p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition">
              <Facebook class="w-4 h-4" />
            </a>
            <a href="#" class="p-2 bg-slate-800 hover:bg-brand-600 hover:text-white rounded-xl transition">
              <Linkedin class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Bloco 2: Navegação -->
        <div>
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegação</h3>
          <ul class="space-y-2 text-xs">
            <li><a href="#" class="hover:text-white transition">Comprar Imóveis</a></li>
            <li><a href="#" class="hover:text-white transition">Alugar Imóveis</a></li>
            <li><a href="#" class="hover:text-white transition">Lançamentos</a></li>
            <li><a href="#" class="hover:text-white transition">Anunciar Meu Imóvel</a></li>
            <li><a href="#" class="hover:text-white transition">Simulação de Financiamento</a></li>
          </ul>
        </div>

        <!-- Bloco 3: Institucional -->
        <div>
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Empresa</h3>
          <ul class="space-y-2 text-xs">
            <li><a href="#" class="hover:text-white transition">Quem Somos</a></li>
            <li><a href="#" class="hover:text-white transition">Nossas Unidades</a></li>
            <li><a href="#" class="hover:text-white transition">Trabalhe Conosco</a></li>
            <li><a href="#" class="hover:text-white transition">Políticas de Privacidade</a></li>
            <li><a href="#" class="hover:text-white transition">Termos de Uso</a></li>
          </ul>
        </div>

        <!-- Bloco 4: Contatos -->
        <div class="space-y-3 text-xs">
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Fale Conosco</h3>
          <div class="flex items-center gap-2">
            <Phone class="w-4 h-4 text-brand-500 shrink-0" />
            <span>0800 555 7788</span>
          </div>
          <div class="flex items-center gap-2">
            <Mail class="w-4 h-4 text-brand-500 shrink-0" />
            <span>contato@primeimoveis.com</span>
          </div>
          <div class="flex items-center gap-2">
            <MapPin class="w-4 h-4 text-brand-500 shrink-0" />
            <span>Av. Paulista, 1000 - São Paulo, SP</span>
          </div>
        </div>

      </div>

      <!-- Direitos autorais -->
      <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span>© {{ new Date().getFullYear() }} Prime Imóveis. Todos os direitos reservados. CRECI: 12345-J</span>
        <div class="flex gap-4">
          <a href="#" class="hover:text-white transition">Políticas</a>
          <a href="#" class="hover:text-white transition">Segurança</a>
        </div>
      </div>
    </div>
  </footer>
</template>
