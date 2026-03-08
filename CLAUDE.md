# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) and Antigravity when working with code in our Next.js Portfolio repository.

## Project Overview

This is a personal portfolio web application built using Next.js (App Router), TailwindCSS, y TypeScript. It will be hosted on Vercel. 
This project has been heavily inspired by `everything-claude-code`, combining the best practices of Claude Code plugins, rules, skills, and agents.

## Core Stack
- **Framework:** Next.js (App Router, React 19)
- **Styling:** TailwindCSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Architecture
- `src/app`: Rutas del Next.js App Router.
- `src/components`: Componentes reutilizables.
- `src/lib`: Utilidades, helpers, integraciones o lógicas base.
- `.agent/workflows`: Flujos de trabajo personalizados para Antigravity o Claude (ej. traer sitios webs).
- `.claude/rules`: Reglas estrictas de codificación, copificadas desde `everything-claude-code`.

## Key Commands & Scripts
- `npm run dev`: Inicia el servidor de desarrollo local de Next.js.
- `npm run build`: Genera el build para producción.
- `npm run lint`: Ejecuta el linter (ESLint).

## Guidelines for Claude & Antigravity
1. **React Patterns:** Sigue los patrones de Next.js App Router (Client Components solo cuando sea necesario interactividad; de lo contrario Server Components).
2. **TypeScript:** Usa tipado estático riguroso. Sin `any` implícitos.
3. **TailwindCSS:** Usa utilidades de Tailwind. Respeta el diseño oscuro (Dark Mode), glassmorphism, UI fluida e interactiva. ¡Recuerda, "Use Rich Aesthetics" está estipulado!

## Flujo para Portar Sitios Existentes (Website Cloning Protocol)
Tenemos un workflow especializado en `.agent/workflows/clone-website.md` que indica explícitamente cómo copiar sitios existentes a Next.js y adaptarlos a nuestro portafolio. ¡Úsalo cuando el usuario nos pida importar o mejorar un sitio viejo!

---
*Created and adapted gracefully combining the power of Antigravity and everything-claude-code plugins.*
