# RIN — My Little Companion 🐈

A minimalist personal website dedicated to Rin, my favorite cat and little companion.

This project is more than just a simple website. It is a small digital space for keeping Rin's photos, memories, stories, and little moments in one place.

---

## About Rin

Rin is a gray-and-white cat with a personality that makes him special to me.

This website was created as a small gift for him — a place where his memories can live.

---

## ✦ Design

The website follows a minimalist visual direction inspired by:

- Soft gray tones
- Clean typography
- Large negative space
- Editorial photography
- Subtle animations
- Grayscale imagery
- Slow and gentle transitions

The goal is to keep the interface simple so that the focus stays on Rin.

---

## ✦ Features

### Hero

The homepage features a continuously moving photo marquee.

The photographs move from right to left and pause when the visitor hovers over them.

### About Rin

A simple introduction to Rin and what makes him special.

### Little Details

A small section describing Rin's appearance, personality, and role as a companion.

### His Story

A dedicated space for Rin's story and the memories we've shared.

### Moments

A 4 × 4 photo memory grid containing up to 16 photographs.

The images use subtle grayscale styling and transition toward natural color when hovered.

### Featured Video

A dedicated video container for memorable moments with Rin.

### Background Music

The website includes an ambient background music system.

The music:

- Attempts to play when the site loads
- Uses a low volume
- Loops continuously
- Includes a sound toggle
- Automatically reflects whether music is playing

Because modern browsers can restrict autoplay with sound, music may require the visitor's first interaction before it begins.

---

## ✦ Technologies

This project uses:

- HTML5
- CSS3
- JavaScript
- Node.js
- Express.js

No frontend framework is required.

The project intentionally keeps the technology simple so the design and content remain the focus.

---

## ✦ Project Structure

```text
Rin/
│
├── assets/
│   ├── audio/
│   │   └── rin-theme.mp3
│   │
│   ├── images/
│   │   ├── rin-01.jpg
│   │   ├── rin-02.jpg
│   │   ├── rin-03.jpg
│   │   ├── ...
│   │   └── rin-16.jpg
│   │
│   └── videos/
│       └── rin-video.mp4
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── views/
│   └── index.html
│
├── package.json
├── package-lock.json
└── README.md