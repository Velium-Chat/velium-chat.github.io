export function mountPixelSimulator(host: HTMLElement) {
  host.innerHTML = `
    <div class="phone" aria-label="Interactive Pixel 9 Pro chat preview">
      <div class="phone-frame">
        <div class="phone-screen">
          <div class="phone-status"><span>9:41</span><span class="status-icons">● ▰ ▴</span></div>
          <header class="chat-top"><button class="icon-button back-button" aria-label="Back"><span class="symbol">arrow_back</span></button><div class="avatar avatar-small">M</div><div class="chat-person"><strong>Maya Chen</strong><span>online now</span></div><button class="icon-button" aria-label="Call"><span class="symbol">call</span></button></header>
          <div class="chat-date">TODAY · 9:38 AM</div>
          <div class="messages" aria-live="polite">
            <div class="message-row incoming"><div class="bubble">The new release is looking so good ✨</div></div>
            <div class="message-row incoming"><div class="bubble">That color adapts to your wallpaper?</div><div class="reactions">✨ <span>2</span>　❤️</div></div>
            <div class="message-row outgoing"><div class="bubble">Every pixel, every little detail.</div></div>
            <div class="message-row outgoing"><div class="photo-card"><div class="photo-sky"></div><div class="photo-caption"><span class="symbol">photo_camera</span> Weekend light <span class="hdr-badge">ULTRA HDR</span></div></div><div class="reactions self-reaction">❤️ <span>1</span>　＋</div></div>
          </div>
          <div class="suggestions"><button class="suggestion">That’s lovely!</button><button class="suggestion">😍</button><button class="suggestion">Tell me more</button></div>
          <form class="composer"><button type="button" class="icon-button add-button" aria-label="Add attachment"><span class="symbol">add</span></button><input aria-label="Message" placeholder="Message" maxlength="180"/><button class="send-button" aria-label="Send message"><span class="symbol">arrow_upward</span></button></form>
          <div class="phone-nav"><span></span></div>
        </div>
        <div class="phone-camera"></div>
      </div>
      <div class="phone-caption-out"><span class="live-dot"></span> Pixel 9 Pro · Live preview</div>
      <button class="back-preview" aria-pressed="false"><span class="symbol">swipe_left</span> Predictive back preview</button>
    </div>`;
  const form = host.querySelector<HTMLFormElement>('.composer')!;
  const input = host.querySelector<HTMLInputElement>('.composer input')!;
  const messages = host.querySelector<HTMLElement>('.messages')!;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) return;
    const row = document.createElement('div'); row.className = 'message-row outgoing message-enter';
    const bubble = document.createElement('div'); bubble.className = 'bubble'; bubble.textContent = value;
    row.append(bubble); messages.append(row); input.value = ''; messages.scrollTop = messages.scrollHeight;
  });
  host.querySelectorAll<HTMLButtonElement>('.suggestion').forEach((button) => button.addEventListener('click', () => { input.value = button.textContent?.trim() ?? ''; input.focus(); }));
  host.querySelector<HTMLButtonElement>('.back-preview')!.addEventListener('click', (event) => {
    const button = event.currentTarget as HTMLButtonElement;
    const enabled = button.getAttribute('aria-pressed') !== 'true'; button.setAttribute('aria-pressed', String(enabled));
    host.querySelector('.phone')!.classList.toggle('back-active', enabled);
  });
}
