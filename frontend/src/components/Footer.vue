<script setup>
import { Home, Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-vue-next';
</script>

<template>
  <footer class="bg-slate-950 text-slate-400 py-16 border-t border-white/10 relative overflow-hidden">
    <!-- Orbe Iluminado de Fundo -->
    <div class="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-500/10 rounded-full blur-[140px] pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        <!-- Coluna 1: Sobre & Redes -->
        <div class="space-y-4">
          <div class="flex items-center gap-2 text-white font-black text-xl tracking-tight">
            <div class="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center shadow-md">
              <Home class="w-4 h-4 stroke-[2.5]" />
            </div>
            <span>Prime<span class="text-slate-300 font-medium">Imóveis</span></span>
          </div>

          <p class="text-xs leading-relaxed text-slate-400">
            A Prime Imóveis conecta você ao imóvel ideal com simplicidade, tecnologia e segurança. Oferecemos as melhores oportunidades de compra e locação de alto padrão.
          </p>

          <div class="flex items-center gap-3 pt-2">
            <a href="#" class="p-2.5 bg-white/5 hover:bg-brand-600 hover:text-white rounded-xl border border-white/10 transition backdrop-blur-md">
              <Instagram class="w-4 h-4" />
            </a>
            <a href="#" class="p-2.5 bg-white/5 hover:bg-brand-600 hover:text-white rounded-xl border border-white/10 transition backdrop-blur-md">
              <Facebook class="w-4 h-4" />
            </a>
            <a href="#" class="p-2.5 bg-white/5 hover:bg-brand-600 hover:text-white rounded-xl border border-white/10 transition backdrop-blur-md">
              <Linkedin class="w-4 h-4" />
            </a>
          </div>
        </div>

        <!-- Coluna 2: Navegação -->
        <div>
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Navegação</h3>
          <ul class="space-y-2.5 text-xs">
            <li><router-link to="/comprar" class="hover:text-white transition">Comprar Imóveis</router-link></li>
            <li><router-link to="/alugar" class="hover:text-white transition">Alugar Imóveis</router-link></li>
            <li><router-link to="/lancamentos" class="hover:text-white transition">Lançamentos Exclusivos</router-link></li>
            <li><a href="#" class="hover:text-white transition">Simulação de Financiamento</a></li>
          </ul>
        </div>

        <!-- Coluna 3: Empresa -->
        <div>
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Empresa</h3>
          <ul class="space-y-2.5 text-xs">
            <li><a href="#" class="hover:text-white transition">Quem Somos</a></li>
            <li><a href="#" class="hover:text-white transition">Nossas Unidades</a></li>
            <li><a href="#" class="hover:text-white transition">Trabalhe Conosco</a></li>
            <li><a href="#" class="hover:text-white transition">Políticas de Privacidade</a></li>
            <li><a href="#" class="hover:text-white transition">Termos de Uso</a></li>
          </ul>
        </div>

        <!-- Coluna 4: Contato -->
        <div class="space-y-3 text-xs">
          <h3 class="text-sm font-bold text-white mb-4 uppercase tracking-wider">Fale Conosco</h3>
          <div class="flex items-center gap-2.5">
            <Phone class="w-4 h-4 text-brand-500 shrink-0" />
            <span>0800 555 7788</span>
          </div>
          <div class="flex items-center gap-2.5">
            <Mail class="w-4 h-4 text-brand-500 shrink-0" />
            <span>contato@primeimoveis.com</span>
          </div>
          <div class="flex items-center gap-2.5">
            <MapPin class="w-4 h-4 text-brand-500 shrink-0" />
            <span>Av. Paulista, 1000 - São Paulo, SP</span>
          </div>
        </div>

      </div>

      <!-- Rodapé Inferior -->
      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <span>© {{ new Date().getFullYear() }} Prime Imóveis. Todos os direitos reservados. CRECI: 12345-J</span>
        <div class="flex gap-4">
          <a href="#" class="hover:text-white transition">Políticas</a>
          <a href="#" class="hover:text-white transition">Segurança</a>
        </div>
      </div>
    </div>
  </footer>
</template>
