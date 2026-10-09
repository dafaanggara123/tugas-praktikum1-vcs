'use strict';

const copyButton = document.querySelector('#copy-profile');
const feedback = document.querySelector('#copy-feedback');
const yearElement = document.querySelector('#year');

if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

function getProfileText() {
  const fields = [
    ['NIM', 'nim'],
    ['Nama', 'nama'],
    ['Kelas', 'kelas'],
    ['Kelompok', 'kelompok']
  ];

  return fields.map(([label, key]) => {
    const element = document.querySelector(`[data-profile="${key}"]`);
    const value = element?.textContent?.trim() || '-';
    return `${label}: ${value}`;
  }).join('\n');
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  // Fallback for local preview in browsers without Clipboard API access.
  const temporaryInput = document.createElement('textarea');
  temporaryInput.value = text;
  temporaryInput.setAttribute('readonly', '');
  temporaryInput.style.position = 'fixed';
  temporaryInput.style.opacity = '0';
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  const copied = document.execCommand('copy');
  temporaryInput.remove();
  if (!copied) throw new Error('Clipboard unavailable');
}

if (copyButton && feedback) {
  copyButton.addEventListener('click', async () => {
    try {
      await copyText(getProfileText());
      feedback.textContent = 'Data profil berhasil disalin.';
      copyButton.querySelector('span').textContent = 'Data tersalin';
    } catch (error) {
      feedback.textContent = 'Salin data tidak tersedia. Silakan salin secara manual.';
      copyButton.querySelector('span').textContent = 'Coba lagi';
    }

    window.setTimeout(() => {
      feedback.textContent = '';
      copyButton.querySelector('span').textContent = 'Salin data profil';
    }, 2600);
  });
}
