# IAFL Website

A Next.js boilerplate with Tailwind CSS v3 and shadcn/ui.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v3** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components
- **Bun** - Fast package manager (to be used after installation)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Bun (optional, can be installed after setup)

### Installation

Since no package manager is currently installed on your system, you'll need to install one first:

#### Option 1: Install Bun (Recommended)

```bash
# On Windows (PowerShell)
powershell -c "irm bun.sh/install.ps1 | iex"
```

#### Option 2: Install npm

```bash
# npm comes with Node.js, download from https://nodejs.org/
```

### Install Dependencies

After installing a package manager:

```bash
# Using Bun
bun install

# Or using npm
npm install
```

### Development Server

```bash
# Using Bun
bun run dev

# Or using npm
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
iafl-website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── globals.css   # Global styles with Tailwind
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   └── lib/
│       └── utils.ts      # Utility functions
├── components.json       # shadcn/ui configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies
```

## Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
# Using Bun
bunx shadcn@latest add [component-name]

# Or using npm
npx shadcn@latest add [component-name]
```

Example:
```bash
bunx shadcn@latest add card
bunx shadcn@latest add dialog
```

## Available Scripts

- `bun run dev` or `npm run dev` - Start development server
- `bun run build` or `npm run build` - Build for production
- `bun run start` or `npm start` - Start production server
- `bun run lint` or `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Bun Documentation](https://bun.sh/docs)
