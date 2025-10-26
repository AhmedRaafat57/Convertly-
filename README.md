# 📁 File Converter

A modern, web-based file converter that allows you to convert various file types directly in your browser. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **🖼️ Image, 🔊 Audio, and 🎥 Video Conversion:** Supports a wide range of formats.
- **🔒 Privacy-Focused:** All conversions are done on your machine in the browser. No files are ever uploaded to a server.
- **🚀 High Performance:** Leverages modern web technologies like WebAssembly for fast conversions.
- **🖱️ Drag & Drop:** A user-friendly interface for easily selecting files.
- **📱 Responsive Design:** Works beautifully on all devices, from desktops to mobile phones.

## 🛠️ Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Core Logic:** FFmpeg.wasm for in-browser media conversion.
- **UI Components:** Shadcn/ui
- **Deployment:** Vercel

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.x or higher) and a package manager (npm, yarn, pnpm, or bun) installed on your machine.

### Installation

1.  Clone the repo:
    ```bash
    git clone https://github.com/your-username/file-converter-main.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd file-converter-main
    ```
3.  Install NPM packages:
    ```bash
    npm install
    ```
4.  Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
