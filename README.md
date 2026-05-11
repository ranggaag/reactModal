# 🚀 React Modal — Accessible & Modern Modal Component

A sleek, reusable, and accessible modal component built with React + TypeScript + TailwindCSS.
Dirancang untuk developer yang butuh modal clean, scalable, dan production-ready tanpa ribet.

* Fokus pada UX, accessibility, dan developer experience

## ✨ Why This Project?

Banyak modal component di luar sana terlalu kompleks atau terlalu minimal.

Project ini dibuat untuk menyeimbangkan:

* ⚡ Simplicity → mudah dipakai
* ♿ Accessibility → keyboard & focus friendly
* 🧩 Reusability → clean component structure
* 🎨 Customizable → gampang di-style dengan Tailwind
* 🔥 Key Features
* 🧠 Accessible by default (Focus Trap)
* ⚛️ Built with React + TypeScript
* 🎨 Styled with TailwindCSS
* 🪟 Portal Rendering (no z-index chaos)
* 🔁 Reusable Component Architecture
* 🎯 Clean API & Easy Integration
* 🎭 Dynamic Icon Support (Iconify)

## 🧱 Tech Stack
* React 19
* TypeScript
* Vite
* TailwindCSS
* focus-trap-react
* Iconify

## ⚡ Quick Start
    $ git clone https://github.com/ranggaag/reactModal.git
    $ cd reactModal
    $ npm install
    $ npm run dev

## 🛠️ Usage Example

```tsx
import { useState } from "react"
import Modal from "./components/modal/Modal"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button onClick={() => setOpen(true)}>
        Delete Item
      </button>

      <Modal
        icon="alert"
        isOpen={open}
        title="Are you sure?"
        buttonActionName="Delete"
        onCancel={() => setOpen(false)}
        onAction={() => {
          console.log("Deleted!")
          setOpen(false)
        }}
      />
    </>
  )
}
```

## 🧩 Struktur Project

Project ini menggunakan pendekatan modular:

```tsx

reactModal/
├── src/
│   ├── components/
│   │   ├── Button
│   │   │   ├── Button.tsx
│   │   │   └── ButtonCancel.tsx
│   │   └── Modal
│   │       ├── Modal.tsx
│   │       └── PageModal.tsx (layout wrapper)
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

* ➡️ Mudah dikembangkan (misalnya tambah variant: warning, info, dll)

* ♿ Accessibility Matters

Modal ini sudah mempertimbangkan:

Focus tidak keluar dari modal
Navigasi keyboard
Struktur DOM yang lebih ramah screen reader

Karena UI yang bagus bukan cuma soal tampilan — tapi juga usability.

🎨 Customization

Karena pakai Tailwind, kamu bisa langsung tweak style:

```tsx
className="bg-red-500 hover:bg-red-600"
```

Atau extend jadi design system kamu sendiri.

# 📈 What I Learned

Project ini bukan cuma soal modal, tapi juga:


* Managing UI state di React

* Accessibility best practices

* Component reusability

* Clean code & folder structure

* Using portals untuk UI layering

# 🚀 Future Improvements

* Animation (Framer Motion)

* Multiple modal variants

* Global modal manager (context-based)

* Publish ke npm

* Unit testing (Vitest / React Testing Library)

# 🤝 Contributing

Feel free untuk fork & improve project ini!

# ⭐ Support

Kalau project ini membantu atau kamu suka, kasih ⭐ di repo ya!

# 👨‍💻 Author

Rangga Abdul Gani
