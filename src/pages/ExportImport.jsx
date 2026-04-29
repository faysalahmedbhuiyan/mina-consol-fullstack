import React, { useEffect, useState } from 'react'
import axios from 'axios'

const BASE = 'http://127.0.0.1:8000'

export default function ExportImport () {
  const [products, setProducts] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [mediaViewer, setMediaViewer] = useState(null) // { mediaList, index }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${BASE}/api/products`)
        setProducts(res.data)
      } catch (err) {
        console.error('Error fetching products:', err)
      }
    }
    fetchProducts()
  }, [])

  const mainSections = ['import', 'export']

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#F0F4F8',
        fontFamily: "'DM Sans', sans-serif",
        paddingBottom: '60px'
      }}
    >
      <link
        href='https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Playfair+Display:wght@700&display=swap'
        rel='stylesheet'
      />

      <div style={{ padding: '36px 28px 0' }}>
        {/* PAGE TITLE — ash background area */}
        <div style={{ marginBottom: '32px' }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '28px',
              fontWeight: '700',
              color: '#0B3C5D',
              margin: '0 0 6px',
              letterSpacing: '-0.3px'
            }}
          >
            Import &amp; Export Products
          </h1>
          <p style={{ color: '#7A9AB0', fontSize: '13px', margin: 0 }}>
            Browse products by section and category
          </p>
        </div>
        {mainSections.map(type => {
          const sectionProducts = products.filter(
            p => p.type?.toLowerCase() === type
          )
          if (!sectionProducts.length) return null

          const subsections = [
            ...new Set(
              sectionProducts
                .map(p => p.sub_section?.toLowerCase())
                .filter(Boolean)
            )
          ]

          return (
            <div key={type} style={{ marginBottom: '48px' }}>
              {/* SECTION HEADER */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '24px'
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: type === 'import' ? '#1a6fa3' : '#0B3C5D',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <span style={{ fontSize: '16px' }}>
                    {type === 'import' ? '↓' : '↑'}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#0B3C5D',
                    margin: 0,
                    textTransform: 'capitalize'
                  }}
                >
                  {type}
                </h2>
                <div
                  style={{ flex: 1, height: '1px', background: '#D8E2EC' }}
                />
              </div>

              {subsections.map(sub => (
                <div key={sub} style={{ marginBottom: '28px' }}>
                  {/* SUBSECTION LABEL */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '14px'
                    }}
                  >
                    <div
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: '#328CC1'
                      }}
                    />
                    <h3
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '1.2px',
                        color: '#328CC1',
                        margin: 0,
                        textTransform: 'uppercase'
                      }}
                    >
                      {sub}
                    </h3>
                  </div>

                  {/* GRID — always 4 columns on large screens */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(4, 1fr)',
                      gap: '14px'
                    }}
                  >
                    {sectionProducts
                      .filter(p => p.sub_section?.toLowerCase() === sub)
                      .map(p => (
                        <ProductCard
                          key={p.id}
                          product={p}
                          onCardClick={() => setSelectedProduct(p)}
                          onMediaClick={(mediaList, idx) =>
                            setMediaViewer({ mediaList, index: idx })
                          }
                        />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>

      {/* PRODUCT DETAIL MODAL */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onMediaClick={(mediaList, idx) =>
            setMediaViewer({ mediaList, index: idx })
          }
        />
      )}

      {/* MEDIA LIGHTBOX */}
      {mediaViewer && (
        <MediaLightbox
          mediaList={mediaViewer.mediaList}
          startIndex={mediaViewer.index}
          onClose={() => setMediaViewer(null)}
        />
      )}
    </div>
  )
}

/* ─── PRODUCT CARD ─────────────────────────────────────────── */

function ProductCard ({ product, onCardClick, onMediaClick }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!product.media?.length) return
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % product.media.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [product.media])

  const currentMedia = product.media?.[index]
  const isVideo = currentMedia?.match(/\.(mp4|webm|ogg)$/i)
  const mediaSrc = currentMedia ? `${BASE}/storage/${currentMedia}` : null

  const mediaList = (product.media || []).map(m => ({
    src: `${BASE}/storage/${m}`,
    isVideo: !!m.match(/\.(mp4|webm|ogg)$/i)
  }))

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1px solid #E4EBF0',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.18s ease, box-shadow 0.18s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-3px)'
        e.currentTarget.style.boxShadow = '0 8px 24px rgba(11,60,93,0.12)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* MEDIA — click opens lightbox */}
      <div
        style={{
          height: '130px',
          background: '#EEF3F7',
          overflow: 'hidden',
          position: 'relative',
          flexShrink: 0
        }}
        onClick={e => {
          e.stopPropagation()
          if (mediaSrc) onMediaClick(mediaList, index)
        }}
      >
        {mediaSrc &&
          (isVideo ? (
            <video
              autoPlay
              muted
              playsInline
              loop
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={mediaSrc} />
            </video>
          ) : (
            <img
              src={mediaSrc}
              alt={product.product_name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.4s ease'
              }}
              onMouseEnter={e =>
                (e.currentTarget.style.transform = 'scale(1.06)')
              }
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
        {/* zoom hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '6px',
            right: '6px',
            background: 'rgba(0,0,0,0.45)',
            borderRadius: '6px',
            padding: '2px 6px',
            fontSize: '10px',
            color: '#fff',
            letterSpacing: '0.3px'
          }}
        >
          ⤢
        </div>
      </div>

      {/* TEXT — click opens product modal */}
      <div style={{ padding: '10px 12px 12px', flex: 1 }} onClick={onCardClick}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#0B3C5D',
            margin: '0 0 3px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {product.product_name}
        </p>

        <p
          style={{
            fontSize: '11px',
            color: '#7A9AB0',
            margin: '0 0 3px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {product.country_name}
        </p>

        <p style={{ fontSize: '11px', color: '#AABDCA', margin: '0 0 6px' }}>
          HS: {product.hs_code}
        </p>

        <p
          style={{
            fontSize: '13px',
            fontWeight: '600',
            color: '#328CC1',
            margin: 0
          }}
        >
          {product.price}
        </p>
      </div>
    </div>
  )
}

/* ─── PRODUCT MODAL ─────────────────────────────────────────── */

function ProductModal ({ product, onClose, onMediaClick }) {
  const mediaList = (product.media || []).map(m => ({
    src: `${BASE}/storage/${m}`,
    isVideo: !!m.match(/\.(mp4|webm|ogg)$/i)
  }))
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(5,20,35,0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50,
        padding: '16px'
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: '#fff',
          borderRadius: '16px',
          maxWidth: '780px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '28px',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            border: '1.5px solid #D0DCE6',
            background: '#F5F8FA',
            fontSize: '14px',
            cursor: 'pointer',
            color: '#5A7A8F',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1
          }}
        >
          ✕
        </button>

        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: '20px',
            color: '#0B3C5D',
            margin: '0 0 18px'
          }}
        >
          {product.product_name}
        </h2>

        {/* MEDIA GRID */}
        {product.media?.length > 0 && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '10px',
              marginBottom: '20px'
            }}
          >
            {product.media.map((m, i) => {
              const src = `${BASE}/storage/${m}`
              const vid = m.match(/\.(mp4|webm|ogg)$/i)
              return (
                <div
                  key={i}
                  onClick={() => onMediaClick(mediaList, i)}
                  style={{
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    background: '#EEF3F7',
                    aspectRatio: '4/3',
                    position: 'relative'
                  }}
                >
                  {vid ? (
                    <video
                      controls
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    >
                      <source src={src} />
                    </video>
                  ) : (
                    <img
                      src={src}
                      alt=''
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* DETAILS */}
        <div
          style={{
            background: '#F5F8FA',
            borderRadius: '10px',
            padding: '16px 18px',
            fontSize: '13.5px',
            color: '#3A5A6F',
            lineHeight: '2'
          }}
        >
          {[
            ['Country', product.country_name],
            ['HS Code', product.hs_code],
            ['Price', product.price]
          ].map(
            ([label, val]) =>
              val && (
                <div key={label} style={{ display: 'flex', gap: '10px' }}>
                  <span
                    style={{
                      fontWeight: '600',
                      color: '#0B3C5D',
                      minWidth: '80px'
                    }}
                  >
                    {label}
                  </span>
                  <span>{val}</span>
                </div>
              )
          )}
          {product.description && (
            <p
              style={{ marginTop: '10px', color: '#5A7A8F', lineHeight: '1.7' }}
            >
              Product Description:-
              {product.description}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

/* ─── MEDIA LIGHTBOX ─────────────────────────────────────────── */

function MediaLightbox ({ mediaList, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  useEffect(() => {
    const handleKey = e => {
      if (e.key === 'ArrowLeft') setCurrent(p => Math.max(0, p - 1))
      if (e.key === 'ArrowRight')
        setCurrent(p => Math.min(mediaList.length - 1, p + 1))
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [mediaList.length, onClose])

  const { src, isVideo } = mediaList[current]
  const hasPrev = current > 0
  const hasNext = current < mediaList.length - 1

  const navBtn = (onClick, label, side) => (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [side]: '16px',
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1.5px solid rgba(255,255,255,0.3)',
        background: 'rgba(255,255,255,0.12)',
        color: '#fff',
        fontSize: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backdropFilter: 'blur(4px)',
        transition: 'background 0.15s',
        zIndex: 10
      }}
      onMouseEnter={e =>
        (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')
      }
      onMouseLeave={e =>
        (e.currentTarget.style.background = 'rgba(255,255,255,0.12)')
      }
    >
      {label}
    </button>
  )

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.93)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        padding: '20px'
      }}
    >
      {/* CLOSE */}
      <button
        onClick={onClose}
        style={{
          position: 'fixed',
          top: '18px',
          right: '22px',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.25)',
          background: 'rgba(255,255,255,0.1)',
          color: '#fff',
          fontSize: '16px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10
        }}
      >
        ✕
      </button>

      {/* COUNTER */}
      {mediaList.length > 1 && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(255,255,255,0.12)',
            borderRadius: '20px',
            padding: '4px 14px',
            fontSize: '12px',
            color: 'rgba(255,255,255,0.7)',
            zIndex: 10
          }}
        >
          {current + 1} / {mediaList.length}
        </div>
      )}

      {/* MEDIA AREA */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        {hasPrev &&
          navBtn(
            e => {
              e.stopPropagation()
              setCurrent(p => p - 1)
            },
            '‹',
            'left'
          )}
        {hasNext &&
          navBtn(
            e => {
              e.stopPropagation()
              setCurrent(p => p + 1)
            },
            '›',
            'right'
          )}

        {isVideo ? (
          <video
            key={src}
            controls
            autoPlay
            style={{
              maxWidth: '82vw',
              maxHeight: '88vh',
              borderRadius: '10px'
            }}
          >
            <source src={src} />
          </video>
        ) : (
          <img
            key={src}
            src={src}
            alt=''
            style={{
              maxWidth: '82vw',
              maxHeight: '88vh',
              borderRadius: '10px',
              objectFit: 'contain'
            }}
          />
        )}
      </div>

      {/* THUMBNAIL STRIP */}
      {mediaList.length > 1 && (
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: 'fixed',
            bottom: '18px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
            padding: '8px 12px',
            background: 'rgba(0,0,0,0.5)',
            borderRadius: '12px',
            backdropFilter: 'blur(6px)',
            zIndex: 10
          }}
        >
          {mediaList.map((m, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: '42px',
                height: '32px',
                borderRadius: '6px',
                overflow: 'hidden',
                cursor: 'pointer',
                flexShrink: 0,
                border:
                  i === current ? '2px solid #fff' : '2px solid transparent',
                opacity: i === current ? 1 : 0.5,
                transition: 'opacity 0.15s, border-color 0.15s'
              }}
            >
              {m.isVideo ? (
                <video
                  src={m.src}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={m.src}
                  alt=''
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
