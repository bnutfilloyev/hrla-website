'use client'

export default function MadeBy() {
  return (
    <a
      href="https://bnutfilloyev.uz"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Made by Bekhruz Nutfilloev"
      style={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 9000,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        padding: '7px 13px',
        borderRadius: 100,
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        fontSize: 11,
        letterSpacing: '0.04em',
        textDecoration: 'none',
        color: 'rgba(237,237,232,0.7)',
        background: 'rgba(10,10,10,0.8)',
        border: '1px solid rgba(255,255,255,0.1)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        opacity: 0.75,
        transition: 'opacity 0.2s, transform 0.2s',
        userSelect: 'none',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.opacity = '1'
        e.currentTarget.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.opacity = '0.75'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#C8A96E', flexShrink: 0 }} />
      Made by{' '}
      <strong style={{ color: '#C8A96E', fontWeight: 500 }}>B.N.</strong>
    </a>
  )
}
